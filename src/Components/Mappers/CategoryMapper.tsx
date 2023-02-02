import { Link } from "react-router-dom";
import { useTypedSelector } from "../../hook/useTypedSelector";

const CategoryMapper = () => {
  const { list } = useTypedSelector((store) => store.category);

  return (
    <>
      <div className="container">
        <div className="row card-list category-block">
          {list.map((item, i) => (
            <div key={item.id} className="card-element col-md-3">
            <Link to={`/ads?categoryId=${item.id}`}>
                <div className="card category-card">
                  <img src="..." className="card-img-top" alt="image" />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                  </div>
                </div>
                </Link>
              </div>
            
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryMapper;
