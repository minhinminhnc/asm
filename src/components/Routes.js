import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./Home";
import Product from "./Product";
import Add from "./Add";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import "bootstrap/dist/css/bootstrap.css";
import Edit from "./Edit";
import { useState } from "react";
import SigninA from "../Signin";
import SignupA from "../Signup";
function Routes(props) {
  const [productName, setProductName] = useState("");
  const onHandleChangeName = (e) => {
    setProductName(e.target.value);
  };
  const onhandleSubmitName = (e) => {
    e.preventDefault();
    props.onSearchByName(productName)
  };
  const onHandleChangeCategory = (e) => {
    e.preventDefault();
    props.onSearchByCategory(e.target.value);
  }
  return (
    <>
      
        <img src="https://1.bp.blogspot.com/-IAogvSkJeoQ/YHYBI6MmuRI/AAAAAAAAHfw/QaJNsXwaUM0ZzJiO6hYKKV8_3imM06hOQCNcBGAsYHQ/s1600/banner-rau-slider-gaagroup-01-min.jpg" height="250px" width="1535px"></img>
     
      <Router>
        <nav className="nav ">
          <div>
            <NavLink to="/" activeClassName="active" className="a" exact>
              Trang Chủ
            </NavLink>
          </div>
          <div>
            <NavLink to="/product" activeClassName="active" className="a" exact>
              Sản Phẩm
            </NavLink>
          </div>
          <div>
            <NavLink to="/product/add" activeClassName="active" className="a">
              Thêm Sản Phẩm
            </NavLink>
          </div>
          <div>
            <NavLink to="/signup" activeClassName="active" className="a">
              Đăng Ký
            </NavLink>
          </div>
          <div>
            <NavLink to="/signin" activeClassName="active" className="a">
              Đăng Nhập
            </NavLink>
          </div>
          
          <NavLink to="/product" exact className="a">
                    <select className="form-select ml-5" onChange={(e) => onHandleChangeCategory(e)}>
                      <option selected>Lọc Sản Phẩm</option>
                      <option value="hoa qua">Hoa Quả</option>
                      <option value="thuc pham">Thực Phẩm</option>
                      <option value="hai san">Hải Sản</option>
                    </select>
                  </NavLink>
          <form onSubmit={onhandleSubmitName} className="d-flex mr-5 ml-5">
                    <NavLink to="/product" exact  className="a">
                      <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search By Name"
                        aria-label="Search"
                        onChange={onHandleChangeName}
                      />
                    </NavLink>
                    <button className="btn btn-danger a" type="submit" >
                      Search
                    </button>
                  </form>
        </nav>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/product" exact>
            <Product {...props} />
          </Route>
          <Route path="/product/add">
            <Add {...props}/>
          </Route>
          <Route path="/signup">
            <SignupA></SignupA>
          </Route>
          <Route path="/signin">
          <SigninA></SigninA>
          </Route>
          {/* <Route path={`/product/:id/edit`} exact>
            <Edit {...props} />
          </Route> */}
        </Switch>
      </Router>
    </>
  );
}

export default Routes;
