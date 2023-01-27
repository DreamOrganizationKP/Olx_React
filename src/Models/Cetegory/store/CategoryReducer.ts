import { ICategoryState } from "../interfaces/ICategoryState";
import { CategoryActionTypes } from "./types";



const initialState : ICategoryState = {
    list:[],
};

export const CategoryReducer = (state=initialState, action: any) : ICategoryState => {
    switch(action.type) {
        case CategoryActionTypes.CATEGORY_LIST: {
            return {
                ...state,
                ...action.payload
            }
        }
        case CategoryActionTypes.CATEGORY_ADD: {
            return {
                ...state,
                list: [...state.list, action.payload.data],
            }
        }
        case CategoryActionTypes.CATEGORY_DELETE: {
               
            return {
                ...state,
                list: state.list.filter((p) => p.id !== action.payload)
            }
        }
        case CategoryActionTypes.CATEGORY_UPDATE: {
            // to do
            return {
                ...state,
                list: [...action.payload]
            }
        }
        case CategoryActionTypes.CATEGORY_UPLOAD_LIST:{
            return{
                ...state,
            }
        }
        default:
            return state;
    }
}