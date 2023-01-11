import { useEffect } from "react";
import { useActions } from "../../hook/useActions";

import { useTypedSelector } from "../../hook/useTypedSelector";


const HomePage = () => {
  const { list } = useTypedSelector((store) => store.product);
  const {GetProductList}  = useActions();


  useEffect(() => {
    GetProductList();
  },[]);

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
