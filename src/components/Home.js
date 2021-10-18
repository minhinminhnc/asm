import { useEffect, useState } from "react";
import { getAll } from "../api/productAPI";
import Routes from "./Routes";
import { Link } from "react-router-dom";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import AddProduct from "./Add";
import { remove } from "../api/productAPI";
import Edit from "./Edit";
const Home = () => {
  const { url } = useRouteMatch();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAll().then((response) => setProducts(response.data));
  }, []);
  const onHandleAdd = (product) => {
    setProducts([...products, product]);
  };
  const onHandleDelete = (id) => {
    const newProducts = products.filter((product) => product.id !== id);
    setProducts(newProducts);
  };
  const onHandleUpdate = (product) => {
    const newProducts = products.map((item) =>
      item.id === product.id ? product : item
    );
    setProducts(newProducts);
  };
  const removeProduct = async (id) => {
    try {
      remove(id);
      onHandleDelete(id);
    } catch (error) {}
  };

  return (
    <div>
      <Switch>
        <Route exact path={url}>
          <div id="product">
            <div className="row">
              {products.map((item, index) => (
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
                        <div>Giá Sản Phẩm: {item.price}/kg</div>
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
        </Route>

        <Route path={`${url}/add`}>
          <AddProduct onAdd={onHandleAdd} />
        </Route>
        <Route path={`${url}/:id`} exact>
          Detail Product
        </Route>
        <Route path={`${url}/:id/edit`}>
          <Edit onUpdate={onHandleUpdate} />
        </Route>
      </Switch>
    </div>
  );
};
export default Home;
