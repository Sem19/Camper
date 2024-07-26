import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { saveFormData } from "../../../feature/form/form-slice";
import styles from "./my-form.module.css";

const MyForm = ({ handleClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(saveFormData(data));
    if (handleClose) {
      handleClose();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Book your campervan now</label>
        <p>Stay connected! We are always ready to help you.</p>
        <input
          id="name"
          placeholder="Enter your name"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <p className={styles.error}>{errors.name.message}</p>}
      </div>
      <div className={styles.formGroup}>
        <input
          id="email"
          placeholder="Enter your email"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}
      </div>
      <div className={styles.formGroup}>
        <input
          id="phone"
          placeholder="Phone number"
          {...register("phone", { required: "Phone number is required" })}
        />
        {errors.phone && <p className={styles.error}>{errors.phone.message}</p>}
      </div>
      <div className={styles.formGroup}>
        <textarea id="comment" placeholder="Comment" {...register("comment")} />
      </div>
      <button type="submit" className={styles.submitButton}>
        Send
      </button>
    </form>
  );
};

export default MyForm;
