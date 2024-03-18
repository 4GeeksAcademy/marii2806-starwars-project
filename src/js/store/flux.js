const getState = ({ getStore, getActions, setStore }) => {
	const BASE_URL = "https://www.swapi.tech/api/";
	return {
	  store: {
		characters: [],
		planets: [],
		starships: [],
	  },
	  actions: {
		getCharacters: () => {
		  let store = getStore();
		  for (let i = 1; i <= 2; i++) {
			fetch(BASE_URL + "people?page=" + i + "&limit=10")
			  .then((response) => response.json())
			  .then((data) => {
				for (let j = 0; j < data.results.length; j++) {
				  fetch(BASE_URL + "people/" + data.results[j].uid)
					.then((resp) => resp.json())
					.then((characterInfo) => {
						if (characterInfo.result.name){
							store.characters.push(characterInfo.result);
					  setStore(store);
						}
						
					})
					.catch((error) => console.log(error));
				}
			  })
			  .catch((error) => console.log(error));
		  }
		},
	
		getPlanets: () => {
		  let store = getStore();
		  for (let i = 1; i <= 2; i++) {
			fetch(BASE_URL + "planets?page=" + i + "&limit=10")
			  .then((response) => response.json())
			  .then((data) => {
				for (let j = 0; j < data.results.length; j++) {
				  fetch(BASE_URL + "planets/" + data.results[j].uid)
					.then((resp) => resp.json())
					.then((planetInfo) => {
						if (planetInfo.result.name){
							store.planets.push(planetInfo.result);
					  setStore(store);
						}
					})
					.catch((error) => console.log(error));
				}
			  })
			  .catch((error) => console.log(error));
		  }
		},
		
		getStarships: () => {
		  let store = getStore();
		//   for (let i = 1; i <= 2; i++) {
			fetch(BASE_URL + "starships?page=" + 1 + "&limit=10")
			  .then((response) => response.json())
			  .then((data) => {
				console.log(data)
				setStore({starships:data.results})
				// for (let j = 0; j < data.results.length; j++) {
				//   fetch(BASE_URL + "starships/" + data.results[j].uid)
				// 	.then((resp) => resp.json())
				// 	.then((starshipInfo) => {
				// 	  store.starships.push(starshipInfo.result);
				// 	  setStore(store);
				// 	})
				// 	.catch((error) => console.log(error));
				// }
			  })
			  .catch((error) => console.log(error));
		//   }
		},
		// getCharacters: async () => {
		//   let store = getStore();
  
		//   for (let i = 1; i <= 9; i++) {
		//     try {
		//       const response = await fetch(BASE_URL + `people?page=${i}&limit=10`);
		//       const data = await response.json();
  
		//       for (const result of data.results) {
		//         try {
		//           const characterResponse = await fetch(BASE_URL + `people/${result.uid}`);
		//           const characterInfo = await characterResponse.json();
  
		//           store.characters.push(characterInfo.result);
		//           setStore(store);
		//         } catch (error) {
		//           console.log(error);
		//         }
		//       }
		//     } catch (error) {
		//       console.log(error);
		//     }
		//   }
		// }
	  },
	};
  };
  
  export default getState;
  