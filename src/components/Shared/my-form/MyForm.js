import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { saveFormData } from "../../../feature/form/formSlice";

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" {...register("name", { required: "Name is required" })} />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" {...register("email", { required: "Email is required" })} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <button type="submit">Send</button>
    </form>
  );
};

export default MyForm;
