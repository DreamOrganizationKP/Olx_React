import { IUserProfile } from "./IUserProfile";


export interface ILogin{
    email:string,
    password:string,
    isRemember:boolean,
  }

  export interface ILoginResponse{
    isCredentialsValid:string,
    profile:IUserProfile,
    accessToken:string,
  }


  