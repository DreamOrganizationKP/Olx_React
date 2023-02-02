import { Link } from "react-router-dom";
import { useTypedSelector } from "../../hook/useTypedSelector";

const imgStyle = {
  width: "150px",
};

const linkStyle = {
  
  textDecoration: "none",
  color: "black",
};

const AdMapper = () => {
  const { list } = useTypedSelector((store) => store.advertisement);

  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-start card-list">
          {list.map((item, i) => (
            <div key={item.id} className="card-element col-md-3">
              <Link style={linkStyle} to={`/ad?id=${item.id}`}>
                <div className="card">
                  <img className="card-img-top" alt="image" style={imgStyle} />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description}</p>
                  <h2>{item.price} грн</h2>
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
