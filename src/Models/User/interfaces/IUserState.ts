import { IUser } from "./IUser";
import { IUserProfile } from "./IUserProfile";


export interface IUserState{
    user?: IUserProfile,
    isAuth:boolean,
}