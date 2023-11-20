import { createFeature, createReducer, on } from '@ngrx/store';
import { ProductStateInterface } from 'src/app/shared/models/productStateInterface.interface';
import { productAction } from './actions';

const initialState: ProductStateInterface = {
  currentArticle: undefined,
  validationError: null,
};

const productActionFeature = createFeature({
  name: 'product',
  reducer: createReducer(
    initialState,
    on(productAction.postProducts, (state) => ({
      ...state,
      validationError: null,
    })),
    on(productAction.postProductsSuccess, (state, action) => ({
      ...state,
      validationError: null,
      currentArticle: action.currentArticle,
    })),
    on(productAction.postProductsFailure, (state, action) => ({
      ...state,
      validationError: null,
    })),

    on(productAction.getProducts, (state) => ({
      ...state,
      validationError: null,
    })),
    on(productAction.getProductsSuccess, (state, action) => ({
      ...state,
      validationError: null,
      currentArticle: action.currentArticle,
    })),
    on(productAction.getProductsFailure, (state, action) => ({
      ...state,
      validationError: null,
    }))
  ),
});

export default productActionFeature;
