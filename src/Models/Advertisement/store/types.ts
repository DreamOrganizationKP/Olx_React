import { IAdvertisement } from "../interfaces/IAdvertisement";
import { IAdvertisementState } from "../interfaces/IAdvertisementState";


export enum AdvertisementActionTypes {
    ADVERTISEMENT_LIST = "ADVERTISEMENT_LIST",
    ADVERTISEMENT_ADD = "ADVERTISEMENT_ADD",
    ADVERTISEMENT_DELETE = "ADVERTISEMENT_DELETE",
    ADVERTISEMENT_UPDATE = "ADVERTISEMENT_UPDATE",
    ADVERTISEMENT_UPLOAD_LIST = "ADVERTISEMENT_UPLOAD_LIST",
}



export interface GetAdvertisementsAction {
    type: AdvertisementActionTypes.ADVERTISEMENT_LIST,
    payload: IAdvertisementState
}

export interface AddAdvertisementsAction {
    type: AdvertisementActionTypes.ADVERTISEMENT_ADD,
    payload: IAdvertisement
}

export interface DeleteAdvertisementsAction {
    type: AdvertisementActionTypes.ADVERTISEMENT_DELETE,
    payload: string
}

export interface UpdateAdvertisementsAction {
    type: AdvertisementActionTypes.ADVERTISEMENT_UPDATE,
    payload: IAdvertisement
}


export type AdvertisementActions = | GetAdvertisementsAction | AddAdvertisementsAction | DeleteAdvertisementsAction | UpdateAdvertisementsAction;