import axios from "axios";
import { Dispatch } from "react";
import http from "../../../http_common";
import { ILogin } from "../interfaces/ILogin";
import { IUser } from "../interfaces/IUser";
import { IUserResponse } from "../interfaces/IUserResponse";
import { UserActions, UserActionTypes } from "./types";



export const Login = (loginData:ILogin) =>async(dispatch:Dispatch<UserActions>)=>{
try{
const resp = await  axios({
  method: 'post',
  url: "http://localhost:5000/api/user/login",
  data: {
    login: loginData.email,
    password: loginData.password,
    isRemember: false 
    // This is the body part
  }
});

console.log(resp);

}catch(error){

}
}


export const GetUserList = () => async (dispatch: Dispatch<UserActions>) =>{

try {
    
    const resp = await http.get<Array<IUser>>("/api/users");
    const { data } = resp;
    console.log(data);
  if(!data){
    console.log("user data is null");
    return;
  }
  else{
    dispatch({
      type: UserActionTypes.USER_LIST,
      payload: {
        list: [...data],
        isLoaded: true
      },
    });
  }
   
    
} catch (error:any) {
    console.log("Getting list error: " + error);
}

}


export const RemoveUser =( id:string ) => async (dispatch: Dispatch<UserActions>) => {

    try{
      http.delete("/api/user/delete/" + id).then(res => {
        dispatch({
          type: UserActionTypes.USER_DELETE,
          payload: id,
        });
      });
    }
    catch (error: any) {
        console.log("Removing list error: " + error);
  }
    
  }

  export const UpdateUser = (ad:IUser) => async (dispatch: Dispatch<UserActions>)=>{

try {
    // to do
  http.put("/api/user/update..").then(res=>{
    dispatch({
        type: UserActionTypes.USER_UPDATE,
        payload: ad,
      });
  })

} catch (error : any) {
    console.log("Updating list error: " + error);
}
  }


  export const AddUser = (ad:IUser) => async (dispatch: Dispatch<UserActions>)=>{

    try {
        
      http.post("/api/User/add..").then(res=>{
        dispatch({
            type: UserActionTypes.USER_ADD,
            payload: ad,
          });
      })
    
    } catch (error : any) {
        console.log("Adding list error: " + error);
    }
      }

