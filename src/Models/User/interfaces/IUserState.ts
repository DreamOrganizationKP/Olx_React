import { IUser } from "./IUser";


export interface IUserState{
    list: Array<IUser>,
    isLoaded: boolean;
}