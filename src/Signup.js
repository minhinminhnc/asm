import { useForm } from "react-hook-form";
import { signup } from "./api/authAPI";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const SignupA = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    signup(data);
    toast.success("Đăng Ký thành công");

  };
  return (
    <div className="row mt-5">
      <div className="col-4"></div>
      <div className="col-4">
        {" "}
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="form-control"
            id="email"
            aria-describedby="helpId"
            placeholder="email"
            {...register("email")}
            
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            aria-describedby="helpId"
            placeholder="mật khẩu"
            {...register("password")}
            
          />

          <button className="btn btn-primary" type="submit">
            Đăng ký
          </button>
        </form>
      </div>
      <div className="col-4"></div>
    </div>
  );
};
export default SignupA;
