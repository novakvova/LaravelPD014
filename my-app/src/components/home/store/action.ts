import { Dispatch } from "react";
import http from "../../../http_common";
import { IProductResponse, ISearchProduct, ProductActions, ProductActionTypes } from "./types";


export const GetProductList =
  (search : ISearchProduct) => async (dispatch: Dispatch<ProductActions>) => {
    try {
      const resp = await http.get<IProductResponse>("/api/products", {
        params: search
      });

      console.log("resp", resp);
      const { data } = resp;
      dispatch({
        type: ProductActionTypes.PRODUCT_LIST,
        payload: {
          list: [...data.data],
          count_pages: data.last_page,
          current_page: data.current_page,
          total: data.total,
        },
      });
    } catch (err: any) {}
  };