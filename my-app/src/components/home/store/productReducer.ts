import { ProductState, ProductActionTypes, ProductActions } from './types';

const initialState : ProductState = {
    list:[]
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