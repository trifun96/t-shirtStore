import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ArticleResponseInterface } from 'src/app/shared/models/articleResponse.interface';
import { ErrorInterface } from 'src/app/shared/models/errorInterface.interface';
import { ProductInterface } from 'src/app/shared/models/productInterface.interdace';

export const productAction = createActionGroup({
  source: 'product',
  events: {
    PostProducts: props<{ request: ProductInterface }>(),
    'Post products success': props<{ currentArticle: ProductInterface }>(),
    'Post products failure': emptyProps(),

    'GetProducts': emptyProps(), // Akcija za pokretanje zahteva za dobijanje podataka
    'GetProductsSuccess': props<{ currentArticle: ProductInterface}>(), // Akcija kada dobijemo podatke uspešno
    'GetProductsFailure': props<{ error: any }>(), // Akcija kada se dogodi greška pri dobijanju podataka
  },
});
