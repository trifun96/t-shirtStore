import {createFeature, createReducer, on} from '@ngrx/store'
import { AuthStateInterface } from "src/app/shared/models/authStateInterface.interface"
import { authActions } from "./actions"

const initialState: AuthStateInterface = {
    currentUser: undefined,
    validationErrors:null
  }
  
  const authFeature = createFeature({
    name: 'auth',
    reducer: createReducer(
      initialState,
      on(authActions.register, (state) => ({
        ...state,
        validationErrors: null,
      })),
      on(authActions.registerSuccess, (state, action) => ({
        ...state,
        currentUser: action.currentUser,
      })),
      on(authActions.registerFailure, (state, action) => ({
        ...state,
        validationErrors: action.errors,
      })),
      on(authActions.login, (state) => ({
        ...state,
        validationErrors: null,
      })),
      on(authActions.loginSuccess, (state, action) => ({
        ...state,
        currentUser: action.currentUser,
      })),
      on(authActions.loginFailure, (state, action) => ({
        ...state,
        validationErrors: action.errors,
      }))
    ),
  })
  
  export const {
    name: authFeatureKey,
    reducer: authReducer,
    selectCurrentUser,
    selectValidationErrors,
  } = authFeature
  