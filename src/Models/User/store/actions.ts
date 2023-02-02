import axios from "axios";
import { Dispatch } from "react";
import http from "../../../http_common";
import { ILogin, ILoginResponse } from "../interfaces/ILogin";
import { IRegister, IRegisterResponse } from "../interfaces/IRegister";
import { IUser } from "../interfaces/IUser";
import { IUserProfile } from "../interfaces/IUserProfile";
import { IUserResponse } from "../interfaces/IUserResponse";
import { UserActions, UserActionTypes } from "./types";



export const GetUser = (id:string) =>async(dispatch:Dispatch<UserActions>)=>{
     // to do
}

export const Login = (loginData:ILogin) =>async(dispatch:Dispatch<UserActions>)=>{
 
try{
const resp = await  axios<ILoginResponse>({
  method: 'post',
  url: "http://localhost:5000/api/user/login",
  data: {
    login: loginData.email,
    password: loginData.password,
    isRemember: false 
    // This is the body part
  }
});
const {data} = resp;
if(data){
  console.log("Login response data",data);
  localStorage.setItem("token",data.accessToken);
}

dispatch({
  type:UserActionTypes.USER_LOGIN,
  payload:{
    ...data,
  }
})
}catch(error){
console.log("register error: ", error);
   
}
}

export const handleSuccessGoogle = (resp: any) => async(dispatch:Dispatch<UserActions>)=> {
  console.log("Resp google", resp);
  const {credential} = resp;
  console.log("Google token", credential);
  
try {
  const response = await http.post<ILoginResponse>("/api/user/googlelogin?token="+credential);
  const { data } = response;
  localStorage.setItem("token", data.accessToken);

  dispatch({
    type: UserActionTypes.USER_LOGIN_BY_GOOGLE,
    payload: {
      ...data
    },
  });
} catch (error) {
  console.log("Google error: "+error);
  
}
 
}



export const Register = (RegisterData:IRegister) =>async(dispatch:Dispatch<UserActions>)=>{
  try{
  const resp = await  axios<IRegisterResponse>({
    method: 'post',
    url: "http://localhost:5000/api/user/register",
    data: {
      name: RegisterData.name,
      surname:RegisterData.surname,
      email: RegisterData.email,
      password: RegisterData.password,
      // This is the body part
    }
  });
  const { data } = resp;
  if(data){
    console.log("data payload",data);
    localStorage.setItem("token",data.accessToken);
  }
 
  
  dispatch({
    type:UserActionTypes.USER_REGISTER,
    payload:{
      ...data,
    }
  })

  
  }catch(error){
  console.log("register error: ", error);
     
  }
  }


  export const Logout =()=>async (dispatch:Dispatch<UserActions>) => {
    try {
      var user = {
        id:"",
        name:"",
        surname:"",
        email:"",
        phoneNumber:"",
        photo:""
      };
      var token = localStorage.getItem("token");
      console.log("given token to remove: ",token);
      if(token){
        localStorage.removeItem("token");
        dispatch({
          type:UserActionTypes.USER_LOGOUT,
          payload:{
            ...user,
          }
        })
      }
    } catch (error) {
      console.log("logout error: ",);
    }
  }





