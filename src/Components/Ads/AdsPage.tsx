import userEvent from "@testing-library/user-event";
import { useEffect, useState } from "react";
import { InfinitySpin } from "react-loader-spinner";
import { useParams, useSearchParams } from "react-router-dom";
import { useActions } from "../../hook/useActions";
import { useTypedSelector } from "../../hook/useTypedSelector";
import AdMapper from "../Mappers/AdMapper";
import AdMapperByCategory from "../Mappers/AdMapperByCategory";

const containerStyle = {
  height: "600px",
};

const AdsPage = () => {
  const [categotyName, setCategoryName] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryId = searchParams.get("categoryId");
  
  //const [adNumber, setAdNumber] = useState(0);
  const { list } = useTypedSelector((store) => store.category);
  const { isLoaded } = useTypedSelector((store) => store.advertisement);
  const { GetAdvertisementList, GetCategoryList } = useActions();

  

  useEffect(() => {
      if(categoryId){
      GetCategoryList();
      GetAdvertisementList(categoryId);
      }
    
    //setCategoryName(list.filter(c=> c.id == categoryId)[0].name);
  }, []);
  if (!isLoaded) {
    return (
      <div
        className="container d-flex justify-content-center align-items-center"
        style={containerStyle}
      >
        <InfinitySpin width="200" color="#002F34" />
      </div>
    );
  }else{
    return(
      <>
      <div className="container">
        <div className="row">
          <div className="col d-flex justify-content-center">
             {/* <h2>{categotyName}</h2> */}
          </div>
        </div>
        <div className="row">
          <div className="col">
            <AdMapperByCategory></AdMapperByCategory>
          </div>
        </div>
      </div>
      </>
    );
  }
   
};

export default AdsPage;
