import { IAdvertisement } from "./IAdvertisement";

export interface IAdvertisementState{
    list: Array<IAdvertisement>,
    isLoaded: boolean;
}