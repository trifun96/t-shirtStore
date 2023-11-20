import { ErrorInterface } from "./errorInterface.interface"
import { ProductInterface } from "./productInterface.interdace"

export class ProductStateInterface {
    currentArticle:ProductInterface | undefined | null
    validationError:ErrorInterface | null
}