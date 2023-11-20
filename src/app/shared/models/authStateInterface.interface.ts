import { ErrorInterface } from "./errorInterface.interface"
import { UserRegistration } from "./userRegistration.interface"

export interface AuthStateInterface {
    currentUser:UserRegistration | null | undefined
    validationErrors: ErrorInterface | null
  }