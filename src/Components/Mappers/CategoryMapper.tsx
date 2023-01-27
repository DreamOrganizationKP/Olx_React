import { useTypedSelector } from "../../hook/useTypedSelector";


 
const CategoryMapper = () =>{

    const {list} = useTypedSelector(
        (store) => store.category
      );

return(
    <>
    <div className="container">
             <div className="row d-flex justify-content-start card-list category-block">
        {list.map((item, i) => (
          <div  key={item.id} className="card-element col-md-3">
            <div className="card category-card">
              <img src="..." className="card-img-top" alt="image" />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
             </div>
    </>
);
}

export default CategoryMapper;