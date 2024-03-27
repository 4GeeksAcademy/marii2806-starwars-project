import React, { useContext } from "react";

import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Card } from "../component/Card";

export const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="Home">
      <div className="text-center mt-5">
        <h2>Characters</h2>
        <div className="row dataRow">
          {store.characters.map((character, index) => {
            return (
              <Card
                key={character.uid}
                item={character}
                index={index}
                category="people"
              />
            );
          })}
        </div>
      </div>
      <div className="text-center mt-5">
        <h2>Planets</h2>
        <div className="row dataRow">
          {store.planets.map((planet, index) => {
            return (
              <Card
                key={planet.uid}
                item={planet}
                index={index}
                category="planets"
              />
            );
          })}
        </div>
      </div>
      <div className="text-center mt-5">
        <h2>Starships</h2>
        <div className="row dataRow">
          {store.starships.map((starship, index) => {
            console.log(store.starships);
            return (
              <Card
                key={starship.uid}
                item={starship}
                index={index}
                category="starships"
              />
              // <p key={person.uid}>{person.name}</p>
            );
          })}
        </div>
      </div>
    </div>
  );
};