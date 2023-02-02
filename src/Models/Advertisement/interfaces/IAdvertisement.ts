import { IUser } from "../../User/interfaces/IUser";

export interface IAdvertisement{
    id: string,
    categoryId: string,
    userId:string,
    user:IUser
    name:string,
    description: string,
    created_at: Date,
    price: number,
    location:string,
    photos: [],
}


