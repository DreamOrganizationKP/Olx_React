import { IUserProfile } from "./IUserProfile";

export interface IRegister{
    name:string,
    surname:string,
    email:string,
    password:string,
 }

 export interface IRegisterResponse{
    profile:IUserProfile,
    accessToken:string,
  }