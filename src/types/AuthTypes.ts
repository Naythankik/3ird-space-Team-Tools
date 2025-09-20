import type {UserType} from "./UserType";

type LoginType = {
  identifier: string,
  password: string,
}

type LoginResponseType = {
    user: UserType,
    access_token: string,
}

type InitialRegisterResponse = {
  message: string
  data: {
    user: UserType
  }
}


export type {
  LoginType,
  LoginResponseType,
  InitialRegisterResponse
}
