import { Action, ActionReducer } from "@ngrx/store";
import { AuthStateInterface } from "./authStateInterface.interface";
import { ProductStateInterface } from "./productStateInterface.interface";

export class State {
authReducer:ActionReducer<AuthStateInterface, Action>
productReducer:ActionReducer<ProductStateInterface, Action>
}

export interface IState {
    authReducer:AuthStateInterface
    productReducer:ProductStateInterface
}