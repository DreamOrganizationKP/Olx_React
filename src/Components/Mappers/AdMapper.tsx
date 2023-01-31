import { Link } from "react-router-dom";
import { useTypedSelector } from "../../hook/useTypedSelector";

const imgStyle = {
  width: "150px",
};

const AdMapper = () => {
  const { list } = useTypedSelector((store) => store.advertisement);

  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-start card-list">
          {list.map((item, i) => (
            <div key={item.id} className="card-element col-md-3">
              <Link to={`ad?id=${item.id}`}>
                <div className="card">
                  <img className="card-img-top" alt="image" style={imgStyle} />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <a href="#" className="btn btn-outline-primary">
                      Get
                    </a>
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
