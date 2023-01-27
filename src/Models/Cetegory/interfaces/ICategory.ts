import { IAdvertisement } from "../../Advertisement/interfaces/IAdvertisement";

export interface ICategory{
   id:string,
   name:string,
   photo:string,
   parentId:string,
   parent:ICategory,
   subCategories: [];
}


