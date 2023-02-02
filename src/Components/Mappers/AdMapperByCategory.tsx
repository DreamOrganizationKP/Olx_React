import { Link, useSearchParams } from "react-router-dom";
import { useTypedSelector } from "../../hook/useTypedSelector";

const imgStyle = {
  width: "150px",
};

const linkStyle = {
  textDecoration: "none",
  color: "black",
};

const cardStyleByCategory ={
    width: "100%",
    height: "200px"
}

const containerStyle ={
    marginTop: "25px"
}
const AdMapper = () => {
  const { list } = useTypedSelector((store) => store.advertisement);

   
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryId = searchParams.get("categoryId");
  
   

  return (
    <>
      <div className="container" style={containerStyle}>
        <div className="row d-flex justify-content-center card-list">
          {list.map((item, i) => (
            <div key={item.id} className="card-element">
              <Link style={linkStyle} to={`/ad?id=${item.id}`}>
                <div className="card" style={cardStyleByCategory}>
                  <div className="card-header"><h4>{item.name}</h4></div>
                  <div className="card-filling d-flex justify-content-center">
                  <img className="card-img-top" alt="image" style={imgStyle} />
                  <div className="card-body">
                  <p className="card-text">Location:  <strong>{item.location}</strong></p>
                   
                  <p className="card-text">Description:  <strong>{item.description}</strong></p>
                    </div>
                  <div className="card-body d-flex justify-content-center">
                
                    <h2>{item.price} грн</h2>
                    </div>
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

export default AdMapper;
function onEffect(arg0: () => void) {
    throw new Error("Function not implemented.");
}

