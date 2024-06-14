import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { saveFormData } from "../../../feature/form/form-slice";
import styles from "./my-form.module.css"; // Імпорт стилів

const MyForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(saveFormData(data));
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
          type="date"
          id="bookingDate"
          {...register("bookingDate", { required: "Booking date is required" })}
        />
        {errors.bookingDate && <p className={styles.error}>{errors.bookingDate.message}</p>}
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
