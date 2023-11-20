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
      on(authActions.registerTest, (state) => ({
        ...state,
        validationErrors: null,
      })),
      on(authActions.registerSuccess, (state, action) => ({
        ...state,
        currentUser: action.currentUser,
      })),
      on(authActions.registerFailure, (state, action) => { 
        console.log('Register failure', action)
        return{
        ...state,
        validationErrors: action.errors,
  }}),

  //Login reducer
  
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
  
  export default authFeature;
  