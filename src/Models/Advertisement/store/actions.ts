import { Dispatch } from "react";
import http from "../../../http_common";
import { ISimpleServerResponse } from "../../../IServerResponse";
import { IAdvertisement } from "../interfaces/IAdvertisement";
import { IAdvertisementResponse } from "../interfaces/IAdvertisementResponse";
import { AdvertisementActions, AdvertisementActionTypes } from "./types";


export const GetAdvertisementList = () => async (dispatch: Dispatch<AdvertisementActions>) =>{

try {
    
    const resp = await http.get<ISimpleServerResponse>("/api/ticket/tickets?categoryId=d6a5920d-0c8b-4f21-ab7c-17b7a91ca846");
    const { data } = resp;
    console.log("ad data:",data.payload);
    
      if(!data){
        console.log("Get ads is null");
        return;
      }
      else{
        dispatch({
          type: AdvertisementActionTypes.ADVERTISEMENT_LIST,
          payload: {
            list: [...data.payload],
            isLoaded: true
          },
        });
      }
   
    
} catch (error:any) {
    console.log("Getting list error: " + error);
}

}


export const RemoveAdvertisement =( id:string ) => async (dispatch: Dispatch<AdvertisementActions>) => {

    try{
      http.delete("/api/advertisement/delete/" + id).then(res => {
        dispatch({
          type: AdvertisementActionTypes.ADVERTISEMENT_DELETE,
          payload: id,
        });
      });
    }
    catch (error: any) {
        console.log("Removing list error: " + error);
  }
    
  }

  export const UpdateAdvertisement = (ad:IAdvertisement) => async (dispatch: Dispatch<AdvertisementActions>)=>{

try {
    // to do
  http.put("/api/advertisement/update..").then(res=>{
    dispatch({
        type: AdvertisementActionTypes.ADVERTISEMENT_UPDATE,
        payload: ad,
      });
  })

} catch (error : any) {
    console.log("Updating list error: " + error);
}
  }


  export const AddAdvertisement = (ad:IAdvertisement) => async (dispatch: Dispatch<AdvertisementActions>)=>{

    try {
        
      http.post("/api/advertisement/add..").then(res=>{
        dispatch({
            type: AdvertisementActionTypes.ADVERTISEMENT_ADD,
            payload: ad,
          });
      })
    
    } catch (error : any) {
        console.log("Adding list error: " + error);
    }
      }

