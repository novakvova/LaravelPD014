import classNames from "classnames";
import { useFormik } from "formik";
import qs from "qs";
import QueryString from "qs";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useActions } from "../../hook/useActions";

import { useTypedSelector } from "../../hook/useTypedSelector";
import { ISearchProduct } from "./store/types";

const HomePage = () => {
  const { list, count_pages, current_page, total } = useTypedSelector(
    (store) => store.product
  );
  const { GetProductList } = useActions();

  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState<ISearchProduct>({
    name: searchParams.get("name") || "",
    page: searchParams.get("page") || 1,
  });

  function filterNonNull(obj: ISearchProduct) {
    return Object.fromEntries(Object.entries(obj).filter(([k, v]) => v));
  }

  useEffect(() => {
    console.log("search", search);
    GetProductList(search);
  }, [search]);

  const onSubmit = (values: ISearchProduct) => {
    console.log("Search Data", values);
    setSearchParams(qs.stringify(filterNonNull(values)));
    setSearch(values);
  };

  const formik = useFormik({
    initialValues: search,
    onSubmit,
  });

  const data = list.map((product) => (
    <tr key={product.id}>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.detail}</td>
    </tr>
  ));

  const buttons = [];
  for (let i = 1; i <= count_pages; i++) {
    buttons.push(i);
  }

  const pagination = buttons.map((page) => (
    <li key={page} className="page-item">
      <Link
        className={classNames("page-link", { active: current_page === page })}
        onClick={() => {
          setSearch({ ...search, page });
        }}
        to={"?" + qs.stringify(filterNonNull({ ...search, page }))}
      >
        {page}
      </Link>
    </li>
  ));

  return (
    <>
      <h1 className="text-center">Головна сторінка</h1>
      

      <form
        onSubmit={formik.handleSubmit}
      >
        <div className="mb-3 p-3 w-25">
          <label htmlFor="name" className="form-label">
            Назва
          </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            className="form-control"
            placeholder="пошук по імені"
          />
        </div>

        <button type="submit" className="btn mb-3 btn-secondary">
          <span>
            <i className="fa fa-search"></i>
          </span>
          <span>Пошук</span>
        </button>
      </form>

      <h4>Усіх продуктів {total}</h4>
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

      <nav>
        <ul className="pagination">{pagination}</ul>
      </nav>
    </>
  );
};
export default HomePage;
