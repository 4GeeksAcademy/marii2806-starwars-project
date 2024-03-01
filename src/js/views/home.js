import React, { useContext } from "react";
// import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext"
import { Card } from "../component/Card";

export const Home = () => {
	const {store, actions} = useContext(Context);
		return (
			<div className="Home">
				<div className="text-center mt-5">
					<h2>Characters</h2>
					<div>
						{store.characters.map((character, index) => {
							return (
								<Card key={character.uid} character={character}/>
								// <p key={person.uid}>{person.name}</p>
							)
						})}
					</div>
				</div>
				{/* <div className="text-center mt-5">
					<h2>Planets</h2>
					<div>
						{store.planets.map((planest, index) => {
							return (
								<PersonCard key={person.uid} person={person}/>
								// <p key={person.uid}>{person.name}</p>
							)
						})}
					</div>
				</div>
				<div className="text-center mt-5">
					<h2>Starships</h2>
					<div>
						{store.people.map((person, index) => {
							return (
								<PersonCard key={person.uid} person={person}/>
								// <p key={person.uid}>{person.name}</p>
							)
						})}
					</div>
				</div> */}
			</div>
		);
	}