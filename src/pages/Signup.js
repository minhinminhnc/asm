const Signup = () => {



  return (
    <div className="row mt-5">
      <div className="col-4"></div>
      <div className="col-4">
        {" "}
        <div className="card">
          <div className="card-header">SIGNUP</div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor>Account</label>
                <input
                  type="text"
                  className="form-control"
                  name
                  id
                  aria-describedby="helpId"
                  placeholder="Nhập Account"
                />
              </div>
              <div className="form-group">
                <label htmlFor>Password</label>
                <input
                  type="password"
                  className="form-control"
                  name
                  id
                  aria-describedby="helpId"
                  placeholder="Nhập Password"
                />
              </div>
            </form>
          </div>
          <div className="card-footer text-muted">
            <button className="btn btn-center btn-primary" type="submit">
              Đăng Ký
            </button>
          </div>
        </div>
      </div>
      <div className="col-4"></div>
    </div>
  );
};
export default Signup;
