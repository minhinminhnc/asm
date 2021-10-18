import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { get, update } from "../api/productAPI";

function Edit(props) {
  const { id } = useParams();
  const history = useHistory();

  const { register, handleSubmit, reset } = useForm();
  const [product, setProduct] = useState({});

  useEffect(() => {
    get(id).then((response) => {
      setProduct(response.data);
      reset(response.data);
    });
  }, [reset]);

  const onSubmit = (data) => {
    const product = {
      id: id,
      ...data,
    };
    update(product).then((response) => {
      // console.log("response", response);
      props.onUpdate(response.data);
      history.push("/products");
    });
  };

  return (
    <>
      <div className="c">
        <h2>Cập nhật sản phẩm</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            defaultValue={product.name}
            {...register("name")}
          />
          <br />
          <input
            type="text"
            defaultValue={product.price}
            {...register("price")}
          />
          <br />
          <input type="text" defaultValue={product.img} {...register("img")} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Edit;
