import { useEffect } from "react";
import { InfinitySpin } from "react-loader-spinner";
import { useActions } from "../../hook/useActions";
import { useTypedSelector } from "../../hook/useTypedSelector";
import AdMapper from "../Mappers/AdMapper";
import MainCategoriesComponent from "./ExtraComponents/MainCategoriesComponent";
import SearchComponent from "./ExtraComponents/SearchComponent";

interface IError {
    message: string,
  }
  
  
  const containerStyle = {
    height: "600px",
  }
 
 const HomePage = () =>{
    
    const {isLoaded } = useTypedSelector(
        (store) => store.advertisement
      );
      const { GetAdvertisementList,GetUserList} = useActions();

    useEffect(() => {
        setTimeout(() => {
        GetAdvertisementList();
        }, 1000);
      }, );
       if (!isLoaded) {
        return (
          <div className="container d-flex justify-content-center align-items-center" style={containerStyle}>
                <InfinitySpin
                    width='200'
                    color="#002F34"
                />
          </div>
        );
      } else{
        return(
            <>
            <div className="container">
                <div className="row">
                    <div className="col d-flex justify-content-center">
                        <SearchComponent></SearchComponent>
                    </div>
                </div>
                <div className="row">
                    <div className="col d-flex justify-content-center">
                        <MainCategoriesComponent></MainCategoriesComponent>
                    </div>
                </div>
                <div className="row">
                  <div className="col d-flex justify-content-center">
                   <h2>Recent Advertisements</h2>
                  </div>
                </div>
                <div className="row">
                    <div className="col">
                    <AdMapper></AdMapper>
                    </div>
                </div>
            </div>
             
            </>
        );
      }
}

export default HomePage;