import { Modal } from "@mui/material";
import UserImg from "../../assets/user.svg";
import { useState } from "react";
import styles from "./User.module.css";
import MyForm from "../Shared/my-form/my-form";
import { useSelector, useDispatch } from "react-redux";
import { clearFormData } from "../../feature/form/form-slice";

const User = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.data);

  const handleEdit = () => {
    dispatch(clearFormData());
    setOpen(false);
    setTimeout(() => {
      setOpen(true);
    }, 0);
  };

  return (
    <>
      <img
        src={UserImg}
        width={28}
        height={28}
        alt="user.svg"
        onClick={handleOpen}
        style={{ cursor: "pointer" }}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={styles.modalContainer}>
          <div className={styles.insideModal}>
            <div>
              {Object.keys(formData).length > 0 ? (
                <div className={styles.formData}>
                  <p>Name: {formData.name}</p>
                  <p>Email: {formData.email}</p>
                  <p>Phone: {formData.phone}</p>
                  <button className={styles.editButton} onClick={handleEdit}>
                    Edit
                  </button>
                </div>
              ) : (
                <MyForm handleClose={handleClose} />
              )}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default User;
