import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Card = ({ item, category }) => {
  const { store, actions } = useContext(Context);
  const [fetchItem, setFetchedItem] = useState(null);
  let isAlreadyFavorite = store.favorites.find(
    (favorite) => favorite.item.uid == item.uid && favorite.category == category
  );
  useEffect(() => {
    fetch("https://www.swapi.tech/api/" + category + "/" + item.uid)
      .then((resp) => resp.json())
      .then((data) => {
        setFetchedItem(data.result);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      {item !== undefined ? (
        <div className="card" style={{ width: "18rem" }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{fetchItem?.properties.name}</h5>
            <p className="card-text">
              {category == "people"
                ? fetchItem?.properties.gender
                : category == "planets"
                ? fetchItem?.properties.population
                : fetchItem?.properties.manufacturer}
            </p>
            <p className="card-text">
              {category == "people"
                ? fetchItem?.properties.eye_color
                : category == "planets"
                ? fetchItem?.properties.terrain
                : fetchItem?.properties.crew}
            </p>
            <p className="card-text">
              {category == "people"
                ? fetchItem?.properties.hair_color
                : category == "planets"
                ? fetchItem?.properties.rotation_period
                : fetchItem?.properties.passenger}
            </p>
            <div>
              <Link
                to={"/details/" + category + "/" + item.uid}
                className="btn btn-primary"
              >
                <button className="btn btn-primary">Learn More</button>
              </Link>
              <button
                onClick={() => {
                  if (isAlreadyFavorite) {
                    actions.deleteFavorite(item.uid, category);
                  } else {
                    actions.addFavorite(item, category);
                  }
                }}
              >
                <i
                  class={
                    isAlreadyFavorite
                      ? "fa-solid fa-heart"
                      : "fa-regular fa-heart"
                  }
                ></i>
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
