
import authFeature from "src/app/feature/user/store/reducer";
import { State } from "../models/store.interface";
import productActionFeature from "src/app/feature/admin/store/reducer";

export const state:State = {
    authReducer: authFeature.reducer,
    productReducer:productActionFeature.reducer
}

