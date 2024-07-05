import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import { Badge, Modal } from "@mui/material";
import styles from "./cart.module.css";
import { useState } from "react";

const Cart = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modal_container">
          <div style={{ background: "white" }}>
            <h1>Modal</h1>
          </div>
        </div>
      </Modal>
      <Badge badgeContent={10} color="primary">
        <ShoppingCartOutlined className={styles.cart} onClick={handleOpen} />
      </Badge>
    </div>
  );
};

export default Cart;
