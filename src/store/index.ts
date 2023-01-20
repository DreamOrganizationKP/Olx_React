import { AdvertisementReducer } from "../Models/Advertisement/store/AdvertisementReducer";
import { applyMiddleware, combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { UserReducer } from "../Models/User/store/UserReducer";


export const rootReducer = combineReducers({
    advertisement: AdvertisementReducer,
    user:UserReducer,
});

export const store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(thunk)));



