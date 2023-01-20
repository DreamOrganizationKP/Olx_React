import { faL } from "@fortawesome/free-solid-svg-icons";
import { IAdvertisementState } from "../interfaces/IAdvertisementState";
import { AdvertisementActionTypes } from "./types";



const initialState : IAdvertisementState = {
    list:[],
    isLoaded:false
};

export const AdvertisementReducer = (state=initialState, action: any) : IAdvertisementState => {
    switch(action.type) {
        case AdvertisementActionTypes.ADVERTISEMENT_LIST: {
            return {
                ...state,
                ...action.payload
            }
        }
        case AdvertisementActionTypes.ADVERTISEMENT_ADD: {
            return {
                ...state,
                list: [...state.list, action.payload.data],
            }
        }
        case AdvertisementActionTypes.ADVERTISEMENT_DELETE: {
               
            return {
                ...state,
                list: state.list.filter((p) => p.id !== action.payload)
            }
        }
        case AdvertisementActionTypes.ADVERTISEMENT_UPDATE: {
            // to do
            return {
                ...state,
                list: [...action.payload]
            }
        }
        case AdvertisementActionTypes.ADVERTISEMENT_UPLOAD_LIST:{
            return{
                ...state,
                isLoaded: true
            }
        }
        default:
            return state;
    }
}