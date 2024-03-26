const getState = ({ getStore, getActions, setStore }) => {
	const BASE_URL = "https://www.swapi.tech/api/";
	return {
	  store: {
		characters: [],
		planets: [],
		starships: [],
		favorites: [],
	  },
	  actions: {
		getCharacters: () => {
		  fetch(BASE_URL + "people?page=1&limit=50")
			.then((response) => response.json())
			.then((data) => setStore({ characters: data.results }))
			.catch((error) => console.log(error));
		},
		getPlanets: () => {
		  fetch(BASE_URL + "planets?page=1&limit=50")
			.then((response) => response.json())
			.then((data) => setStore({ planets: data.results }))
			.catch((error) => console.log(error));
		},
		getStarships: () => {
		  fetch(BASE_URL + "starships?page=1&limit=50")
			.then((response) => response.json())
			.then((data) => setStore({ starships: data.results }))
			.catch((error) => console.log(error));
		},
		addFavorite: (item, category) => {
		  let store = getStore();
		  store.favorites.push({ item: item, category: category });
		  setStore(store);
		},
		deleteFavorite: (uid, category) => {
		  let store = getStore();
		  let newFavorites = store.favorites.filter(
			(favorite) =>
			  favorite.item.uid != uid && favorite.category != category
		  );
		  setStore({ favorites: newFavorites });
		},
	  },
	};
  };
  
  export default getState;