import "./App.css";
import { useState, useEffect } from "react";
import { getAll } from "./api/productAPI";
import Routes from "./components/Routes";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAll().then((response) => setProducts(response.data)
    );
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
  const onHandleSearchByName = (productName) =>{
    if(productName=="")  {
      getAll().then((response) => setProducts(response.data));
    }
    else{
 getAll().then((response) => response.data.filter((item)=> item.name==productName))
    .then((product)=> setProducts(product));
    }
  }
  const onHandleSearchByCategory = (category) =>{
    return getAll().then((response) => response.data.filter((item)=> item.category==category))
    .then((product)=> setProducts(product));
  }
  return (
    <div>
      <Routes
        products={products}
        onAdd={onHandleAdd}
        onDelete={onHandleDelete}
        onUpdate={onHandleUpdate}
        onSearchByName={onHandleSearchByName}
        onSearchByCategory={onHandleSearchByCategory}
      />
    </div>
  );
}

export default App;
