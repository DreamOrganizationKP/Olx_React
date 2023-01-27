import * as AdvertisementActionCreators from "../../Models/Advertisement/store/actions";
import * as UserActionCreators from "../../Models/User/store/actions";
import * as CategoryActionCreators from "../../Models/Cetegory/store/actions";



const actions = {
    ...AdvertisementActionCreators,
    ...UserActionCreators,
    ...CategoryActionCreators,
}

export default actions;