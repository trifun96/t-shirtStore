import { ProductInterface } from "./productInterface.interdace"

export class OrderInterface {
    id:number
    name:string
    surname:string
    email:string
    address:string
    mobilePhone:number
    city:string
    country:string
    state:string
    zip:number
    comment:string
    products:ProductInterface[]
}