import { useForm } from "react-hook-form";
import { signin } from "./api/authAPI";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from "react-router";
const SigninA = () => {
    const hi=useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // call api
      const result = await signin(data);
      // console.log(result);
      // trả về dữ liệu user và lưu vào localStorage
      // localStorage.setItem("info", JSON.stringify(result.data));
      // Hiển thị thông báo thành công
      toast.success("Đăng nhập thành công");
      
    } catch (error) {
      toast.error(error.response.data);
    }
  };
  return (
    <div className="row mt-5">
    <div className="col-4"></div>
    <div className="col-4">
      {" "}
     
      <form onSubmit={handleSubmit(onSubmit)}>
      <ToastContainer />
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
          Đăng nhập
        </button>
      </form>
    </div>
    <div className="col-4"></div>
  </div>

  );
};
export default SigninA;
