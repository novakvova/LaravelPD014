import { Dispatch } from "react";
import http from "../../../http_common";
import { IProductResponse, ProductActions, ProductActionTypes } from "./types";


export const GetProductList =
  () => async (dispatch: Dispatch<ProductActions>) => {
    try {
      http.get<IProductResponse>("/api/products").then((resp) => {
        console.log("resp", resp);
        const { data } = resp;
        dispatch({
          type: ProductActionTypes.PRODUCT_LIST,
          payload: {
            list: [...data.data],
            count_pages: data.last_page,
            current_page: data.current_page,
            total: data.total,
          }
        });
      });
    } catch (err: any) {}
  };