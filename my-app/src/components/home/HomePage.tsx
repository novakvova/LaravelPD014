import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hook/useTypedSelector";
import http from "../../http_common";
import { IProductItem, ProductActionTypes } from "./store/types";

const HomePage = () => {
  const { list } = useTypedSelector((store) => store.product);

  const dispatch = useDispatch();

  useEffect(() => {
    http.get<Array<IProductItem>>("/api/products").then((resp) => {
      console.log("resp", resp);
      dispatch({ type: ProductActionTypes.PRODUCT_LIST, payload: resp.data });
    });
  });

  const data = list.map((product) => (
    <tr key={product.id}>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.detail}</td>
    </tr>
  ));
  return (
    <>
      <h1 className="text-center">Головна сторінка</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Назва</th>
            <th scope="col">Опис</th>
          </tr>
        </thead>
        <tbody>{data}</tbody>
      </table>
    </>
  );
};
export default HomePage;
