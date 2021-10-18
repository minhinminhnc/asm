import { remove } from "../api/productAPI";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import { Link } from "react-router-dom";
import Edit from "./Edit";
import { useEffect } from "react";
import { useHistory } from "react-router";

function Product(props) {
  const { url } = useRouteMatch();

  const removeProduct = async (id) => {
    try {
      remove(id);
      props.onDelete(id);
    } catch (error) {}
  };

  return (
    <Router>
      <Route path={url} exact>
        {/* <div className="row">
        {props.products.map((item, index) => (
          <div className="col-3">
            <div key={index}>
            <Link to={`/product/${item.id}`} exact>
            <div>  Name : {item.name}</div>
            </Link>
           <div>Category: {item.category}</div>
            <button onClick={() => removeProduct(item.id)}>Delete</button>
            <Link to={`${url}/edit/` + item.id} exact>
             <div> Edit</div>
            </Link>
          </div>
          </div>
         
        ))} </div> */}
        <div id="product">
          <div className="row">
            {props.products.map((item, index) => (
              <div className="col-3">
                <div key={index}>
                  <div class="card">
                    <div class="card-header">
                      <Link to={`/product/${item.id}`} exact className="b">
                        <div> Tên Sản Phẩm : {item.name}</div>
                      </Link>
                    </div>
                    <div class="card-body">
                      <img
                        src={item.img}
                        width="100px"
                        height="100px"
                      />
                      <div>Giá sản phẩm: {item.price}/kg</div>
                    </div>
                    <div class="card-footer text-muted">
                      <button
                        className="btn btn-primary"
                        onClick={() => removeProduct(item.id)}
                      >
                        Delete
                      </button>
                      <Link to={`${url}/edit/` + item.id} exact>
                        <div className="btn btn-primary"> Edit</div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}{" "}
          </div>
        </div>
        {/* <Route path={`${url}/add`} exact>
          <AddProduct {...props} />
        </Route> */}
      </Route>
      <Route path={`${url}/edit/:id`} exact>
        <Edit {...props} />
      </Route>
    </Router>
  );
}

export default Product;