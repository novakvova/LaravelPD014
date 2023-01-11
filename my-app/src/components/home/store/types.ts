export interface IProductItem {
    id: number,
    name: string,
    detail: string
}

export interface IProductResponse {
    data: Array<IProductItem>,
    current_page: number,
    total: number,
    last_page: number
}

export interface ProductState {
    list: Array<IProductItem>,
    current_page?: number,
    total?: number,
    count_pages?: number
}

export enum ProductActionTypes {
    PRODUCT_LIST="PRODUCT_LIST"
}

export interface GetProductsAction {
    type: ProductActionTypes.PRODUCT_LIST,
    payload: ProductState
}

export type ProductActions = | GetProductsAction;


