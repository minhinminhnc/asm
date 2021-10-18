import { useForm } from "react-hook-form";
import { signin } from "./api/authAPI";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router";
import { useEffect, useState } from "react";
const SigninA = () => {
  const history = useHistory();

  const [users, setUsers] = useState([]);

  useEffect(async() => {
    await signin().then((response) => setUsers(response.data));
    console.log(users);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      var check = false;
      for(var i = 0; i < users.length; i++){
        if(users[i].username === data.username && users[i].password === data.password){
          check = true;
          break;
        }
      }
      if(check){
        toast.success("Đăng nhập thành công");
      history.push("/product");
      }else{
        toast.error("Đăng nhập thất bại");
      }
    
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
            {...register("username")}
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
