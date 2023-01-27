import { useEffect } from "react";
import { useActions } from "../../../hook/useActions";
import CategoryMapper from "../../Mappers/CategoryMapper";


const MainCategoriesComponent = ()=>{

    const { GetCategoryList} = useActions();

    useEffect(() => {
        GetCategoryList();
      }, );
        return(
            <>
           <div className="container">
                <div className="row">
                    <div className="col">
                    <CategoryMapper></CategoryMapper>
                    </div>
                </div>
            </div>
             
            </>
        );
      }


export default MainCategoriesComponent;