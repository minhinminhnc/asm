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
      id: data.id,
      ...data,
    };
    update(product).then((response) => {
      props.onUpdate(response.data);
      history.push("/product");
    });
  };
// file này có phải t code đâu b
  return (
    <>
      <div className="c">
        <h2>Cập nhật sản phẩm</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <a>Tên Sản Phẩm</a>
          <input className="d"
            type="text"
            defaultValue={product.name}
            {...register("name")}
          />
          <br />
          <a>Giá Sản Phẩm</a>
          <input className="d"
            type="text"
            defaultValue={product.price}
            {...register("price")}
          />
          <br />
          <a> Link Ảnh SP  </a>
          <input type="text" defaultValue={product.img} {...register("img")} className="d"/>
          <br />
          <button type="submit" className="btn btn-primary e">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Edit;