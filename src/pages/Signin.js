import { useForm } from "react-hook-form";
import { signin } from "../api/authAPI";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signin = () => {
  const {
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (user) => {
    try {
      const result = await signin(user);
      console.log("day la",result);
      localStorage.setItem("info", JSON.stringify(result.data));
      toast.success("Đăng nhập thành công");
    } catch (error) {
      toast.error(error.response.data);
    }
  };

  const getGiaTri = (data) =>{
    return(
      console.log(data)
    )
  }

  return (
    <form >
      <ToastContainer/>
      <div className="row mt-5">
        <div className="col-4"></div>
        <div className="col-4">
          {" "}
          <div className="card">
            <div className="card-header">LOGIN</div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor>Account</label>
                  <input
                    type="text"
                    className="form-control"
                    aria-describedby="helpId"
                    placeholder="Nhập Account"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    aria-describedby="helpId"
                    placeholder="Nhập Password"
                  />
                </div>
              </form>
            </div>
            <div className="card-footer text-muted">
              <button className="btn btn-center btn-primary" type="submit">
                Đăng Nhập
              </button>
            </div>
          </div>
        </div>
        <div className="col-4"></div>
      </div>
    </form>
  );
};
export default Signin;
