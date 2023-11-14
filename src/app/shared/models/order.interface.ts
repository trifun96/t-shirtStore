import { ProductInterface } from "./productInterface.interdace"

export class OrderInterface {
    id:number
    fullName:string
    email:string
    address:string
    mobilePhone:number
    city:string
    state:string
    zip:number
    products:ProductInterface[]
}