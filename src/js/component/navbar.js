import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Logo from "../../img/Star-Wars-Logo.png";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <div className="logoDiv">
        <Link to="/">
          <img className="Logo w-25" src={Logo} alt="Star Wars Logo" />
        </Link>
      </div>
      <button onClick={() => console.log(store.favorites)}>click here</button>
      <div className="dropdown">
        <button
          className="btn btn-outline-warning dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          ♡ Favorites {store.favorites.length}
        </button>
        <ul className="dropdown-menu">
          <li>
            <h6>Characters</h6>
            {store.favorites
              .filter((favorite) => favorite.category == "people")
              .map((favorite, index) => (
                <div>
                  {" "}
                  <Link to={"/details/people/" + favorite.item.uid}>
                    {favorite.item.name}
                  </Link>
                  <span onClick={() => actions.deleteFavorite(favorite.item.uid, favorite.category)}>
									  <i className="fa-regular fa-trash-can"></i>
								  </span>
                </div>
              ))}
          </li>
          <li>
            <h6>Planets</h6>
            {store.favorites
              .filter((favorite) => favorite.category == "planets")
              .map((favorite, index) => (
                <div>
                  {" "}
                  <Link to={"/details/planets/" + favorite.item.uid}>
                    {favorite.item.name}
                  </Link>
                  <span onClick={() => actions.deleteFavorite(favorite.item.uid, favorite.category)}>
									  <i className="fa-regular fa-trash-can"></i>
								  </span>
                </div>
              ))}
          </li>
          <li>
            <h6>Starships</h6>
            {store.favorites
              .filter((favorite) => favorite.category == "starships")
              .map((favorite, index) => (
                <div>
                  {" "}
                  <Link to={"/details/starships/" + favorite.item.uid}>
                    {favorite.item.name}
                  </Link>
                  <span onClick={() => actions.deleteFavorite(favorite.item.uid, favorite.category)}>
									  <i className="fa-regular fa-trash-can"></i>
								  </span>
                </div>
              ))}
          </li>
        </ul>
      </div>
    </nav>
  );
};
