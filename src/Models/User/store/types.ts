import { ILoginResponse } from "../interfaces/ILogin";
import { IRegisterResponse } from "../interfaces/IRegister";
import { IUser } from "../interfaces/IUser";
import { IUserProfile } from "../interfaces/IUserProfile";
import { IUserResponse } from "../interfaces/IUserResponse";
import { IUserState } from "../interfaces/IUserState";

export enum UserActionTypes {
    USER_GET = "USER_GET",
    USER_LOGIN = "USER_LOGIN",
    USER_LOGOUT = "USER_LOGOUT",
    USER_REGISTER = "USER_REGISTER",
    USER_LOGIN_BY_GOOGLE = "USER_LOGIN_BY_GGOGLE"
}



export interface LoginUsersAction {
    type: UserActionTypes.USER_LOGIN,
    payload: ILoginResponse
}


export interface RegisterUsersAction {
    type: UserActionTypes.USER_REGISTER,
    payload: IRegisterResponse
}

export interface LoginUsersByGoogleAction {
    type: UserActionTypes.USER_LOGIN_BY_GOOGLE,
    payload: ILoginResponse
}


export interface LogoutUsersAction {
    type: UserActionTypes.USER_LOGOUT,
    payload: IUserProfile
}


export type UserActions = LoginUsersByGoogleAction  | LoginUsersAction | LogoutUsersAction | RegisterUsersAction ;