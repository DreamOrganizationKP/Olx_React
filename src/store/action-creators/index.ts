import * as AdvertisementActionCreators from "../../Models/Advertisement/store/actions";
import * as UserActionCreators from "../../Models/User/store/actions";



const actions = {
    ...AdvertisementActionCreators,
    ...UserActionCreators,
}

export default actions;