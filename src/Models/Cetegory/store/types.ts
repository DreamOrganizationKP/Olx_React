import { ICategory } from "../interfaces/ICategory";
import { ICategoryState } from "../interfaces/ICategoryState";



export enum CategoryActionTypes {
    CATEGORY_LIST = "CATEGORY_LIST",
    CATEGORY_ADD = "CATEGORY_ADD",
    CATEGORY_DELETE = "CATEGORY_DELETE",
    CATEGORY_UPDATE = "CATEGORY_UPDATE",
    CATEGORY_UPLOAD_LIST = "CATEGORY_UPLOAD_LIST",
}



export interface GetCategorysAction {
    type: CategoryActionTypes.CATEGORY_LIST,
    payload: ICategoryState
}

export interface AddCategorysAction {
    type: CategoryActionTypes.CATEGORY_ADD,
    payload: ICategory
}

export interface DeleteCategorysAction {
    type: CategoryActionTypes.CATEGORY_DELETE,
    payload: string
}

export interface UpdateCategorysAction {
    type: CategoryActionTypes.CATEGORY_UPDATE,
    payload: ICategory
}


export type CategoryActions = | GetCategorysAction | AddCategorysAction | DeleteCategorysAction | UpdateCategorysAction;