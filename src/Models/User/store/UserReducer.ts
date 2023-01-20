import { faL } from "@fortawesome/free-solid-svg-icons";
import { IUserState } from "../interfaces/IUserState";
import { UserActionTypes } from "./types";


const initialState : IUserState = {
    list:[],
    isLoaded:false
};

export const UserReducer = (state=initialState, action: any) : IUserState => {
    switch(action.type) {
        case UserActionTypes.USER_LIST: {
            console.log("some message ", action);
            return {
                ...state,
                ...action.payload
            }
        }
        case UserActionTypes.USER_ADD: {
            return {
                ...state,
                list: [...state.list, action.payload.data],
            }
        }
        case UserActionTypes.USER_DELETE: {
               
            return {
                ...state,
                list: state.list.filter((p) => p.id !== action.payload)
            }
        }
        case UserActionTypes.USER_UPDATE: {
            // to do
            return {
                ...state,
                list: [...action.payload]
            }
        }
        case UserActionTypes.USER_UPLOAD_LIST:{
            return{
                ...state,
                isLoaded: true
            }
        }
        default:
            return state;
    }
}