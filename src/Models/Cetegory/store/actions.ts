import { Dispatch } from "react";
import http from "../../../http_common";
import { ISimpleServerResponse } from "../../../IServerResponse";
import { ICategory } from "../interfaces/ICategory";
import { CategoryActions, CategoryActionTypes } from "./types";



export const GetCategoryList = () => async (dispatch: Dispatch<CategoryActions>) =>{

try {
    
    const resp = await http.get<ISimpleServerResponse>("/api/category/getall");
    const { data } = resp;
    console.log("data:", data.payload);
      if(!data){
        console.log("Get ads is null");
        return;
      }
      else{
        dispatch({
          type: CategoryActionTypes.CATEGORY_LIST,
          payload: {
            list: [...data.payload],
          },
        });
      }
    
} catch (error:any) {
    console.log("Getting CATEGORY error: " + error);
}

}


export const RemoveCategory =( id:string ) => async (dispatch: Dispatch<CategoryActions>) => {

    try{
      http.delete("/api/Category/delete/" + id).then(res => {
        dispatch({
          type: CategoryActionTypes.CATEGORY_DELETE,
          payload: id,
        });
      });
    }
    catch (error: any) {
        console.log("Removing CATEGORY error: " + error);
  }
    
  }

  export const UpdateCategory = (ad:ICategory) => async (dispatch: Dispatch<CategoryActions>)=>{

try {
    // to do
  http.put("/api/Category/update..").then(res=>{
    dispatch({
        type: CategoryActionTypes.CATEGORY_UPDATE,
        payload: ad,
      });
  })

} catch (error : any) {
    console.log("Updating CATEGORY error: " + error);
}
  }


  export const AddCategory = (ad:ICategory) => async (dispatch: Dispatch<CategoryActions>)=>{

    try {
        
      http.post("/api/Category/create").then(res=>{
        dispatch({
            type: CategoryActionTypes.CATEGORY_ADD,
            payload: ad,
          });
      })
    
    } catch (error : any) {
        console.log("Adding CATEGORY error: " + error);
    }
      }

