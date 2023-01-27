import { AdvertisementReducer } from "../Models/Advertisement/store/AdvertisementReducer";
import { applyMiddleware, combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { UserReducer } from "../Models/User/store/UserReducer";
import { CategoryReducer } from "../Models/Cetegory/store/CategoryReducer";


export const rootReducer = combineReducers({
    advertisement: AdvertisementReducer,
    user:UserReducer,
    category:CategoryReducer,
});

export const store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(thunk)));



