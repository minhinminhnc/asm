import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { add } from "../api/productAPI";

const Add = (props) => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Submit form để thêm sản phẩm
  const onSubmit = async (product) => {
    try {
      const { data } = await add(product);
      props.onAdd(data);
      history.push("/product");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="row mt-5">
      <div className="col-4"></div>
      <div className="col-4">
        {" "}
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="helpId"
            placeholder="name"
            {...register("name", { required: true })}
          />
          <br />
          {errors.name && <span>Field name is require</span>}

          <label htmlFor="price">Price</label>
          <input
            type="text"
            className="form-control"
            id="price"
            aria-describedby="helpId"
            {...register("price", { required: true })}
            placeholder="Giá sản phẩm"
          />
          <br />
          {errors.price && <span>Field price is require</span>}
          <label htmlFor="desc">Desc</label>
          <input
            type="text"
            className="form-control"
            id="desc"
            aria-describedby="helpId"
            placeholder="desc"
            {...register("desc")}
            placeholder="mô tả sản phẩm"
          />
          <br />
          <button className="btn btn-primary" type="submit">
            Thêm sản phẩm
          </button>
        </form>
      </div>
      <div className="col-4"></div>
    </div>
  );
};
export default Add;
