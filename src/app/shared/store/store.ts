import { authReducer } from "src/app/feature/user/store/reducer";
import { State } from "../models/store.interface";
import { productReducer } from "src/app/feature/admin/store/reducer";

export const state:State = {
    authReducer: authReducer,
    productReducer:productReducer
}

