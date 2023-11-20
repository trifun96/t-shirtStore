import { ProductInterface } from "./productInterface.interdace"

export class ArticleStateInterface {
    isLoading:boolean
    isSubmitting:boolean
    data:ProductInterface | null
}