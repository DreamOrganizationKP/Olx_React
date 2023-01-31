import { faL } from "@fortawesome/free-solid-svg-icons";
import { traceDeprecation } from "process";
import { IUserState } from "../interfaces/IUserState";
import { UserActionTypes } from "./types";


const initialState : IUserState = {
    isAuth:false
};

export const UserReducer = (state=initialState, action: any) : IUserState => {
    switch(action.type) {
       
        case UserActionTypes.USER_LOGIN: {
            return{
                ...state,
                user: action.payload,
                isAuth: true
            }
        }
        case UserActionTypes.USER_LOGIN_BY_GOOGLE: {
            return{
                ...state,
                isAuth: true
            }
        }
        case UserActionTypes.USER_LOGOUT: {
            console.log("user logout payload", action.payload);
            return {
                ...state,
                user:action.payload,
                isAuth:false
            }
        }
        case UserActionTypes.USER_REGISTER: {
            console.log("user register payload", action.payload);
            return {
                ...state,
                user:action.payload,
                isAuth:true
            }
        }
       
        default:
            return state;
    }
}