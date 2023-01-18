import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";


const DefaultHeader = () => {
  return (
    <>
      <nav className="navbar navbar-custom navbar-expand-lg">
        <Link className="nav-link home-nav-btn active" aria-current="page" to="/">
          Logo Here
        </Link>
        <div className="collapse navbar-custom navbar-collapse d-flex justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link nav-link-custom active" to="/">Messages</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-link-custom active" to="/savedAd"><FontAwesomeIcon icon={faHeart} /></Link>
            </li>

          </ul>
        </div>

        <div className="collapse navbar-collapse d-flex justify-content-around secondNavbarNav" id="secondNavbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">


              <div className="dropdown">
                <Link className="nav-link nav-link-custom active dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" to=""><FontAwesomeIcon className="faUser" icon={faUser} />Profile</Link>

                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>

            </li>
            <li>
              <Link className="btn nav-link active" id="btn-ad" to="/createAd">Make Ad</Link>
            </li>
          </ul>
        </div>

      </nav>
    </>
  );

}

export default DefaultHeader;