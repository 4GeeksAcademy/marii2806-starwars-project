const BASE_URL = "https://www.swapi.tech/api/"
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			starships: [],
		},
		actions: {

			getCharacters: async () => {
				const response = await fetch(
					BASE_URL + "people"
				);
				const body = await response.json();
				setStore({
					characters: body.results
				})
			},

			getCharacter: async (id) => {
				const response = await fetch(
					BASE_URL + "people/" + id
				);
				const body = await response.json();
				const person = body.result;
				return person;
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
