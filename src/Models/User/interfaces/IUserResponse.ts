import { IUserProfile } from "./IUserProfile";


 export interface IUserResponse {
   isCredentialValid:boolean,
   profile: IUserProfile,
   accessToken: string,
  }

