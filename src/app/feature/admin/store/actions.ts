import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ProductInterface } from 'src/app/shared/models/productInterface.interdace';

export const productAction = createActionGroup({
  source: 'product',
  events: {
    PostProducts: props<{ request: any }>(),
    'Post products success': props<{ currentArticle: ProductInterface }>(),
    'Post products failure': emptyProps(),

    GetProducts: emptyProps(),
    GetProductsSuccess: props<{ currentArticle: ProductInterface }>(),
    GetProductsFailure: emptyProps(),
  },
});
