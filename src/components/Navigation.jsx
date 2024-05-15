import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand text-light" href="#">
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav text-center">
            <li className="nav-item">
              <Link
                to="Favoritas"
                className="nav-link active navbar-brand text-light"
                aria-current="page"
                href="#"
              >
                Favoritas
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
