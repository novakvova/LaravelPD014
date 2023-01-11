import { ProductState, ProductActionTypes, ProductActions } from './types';

const initialState: ProductState = {
  list: [],
  count_pages: 0,
  current_page: 0,
  total: 0,
};
export const productReducer = (state=initialState, action: ProductActions) : ProductState => {
    switch(action.type) {
        case ProductActionTypes.PRODUCT_LIST: {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state;
    }
}