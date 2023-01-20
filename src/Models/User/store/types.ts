import { IUser } from "../interfaces/IUser";
import { IUserState } from "../interfaces/IUserState";

export enum UserActionTypes {
    USER_LIST = "USER_LIST",
    USER_ADD = "USER_ADD",
    USER_DELETE = "USER_DELETE",
    USER_UPDATE = "USER_UPDATE",
    USER_UPLOAD_LIST = "USER_UPLOAD_LIST",
}

export interface GetUsersAction {
    type: UserActionTypes.USER_LIST,
    payload: IUserState
}

export interface AddUsersAction {
    type: UserActionTypes.USER_ADD,
    payload: IUser
}

export interface DeleteUsersAction {
    type: UserActionTypes.USER_DELETE,
    payload: string
}

export interface UpdateUsersAction {
    type: UserActionTypes.USER_UPDATE,
    payload: IUser
}


export type UserActions = | GetUsersAction | AddUsersAction | DeleteUsersAction | UpdateUsersAction;