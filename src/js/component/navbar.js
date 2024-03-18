import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Logo from "../../img/Star-Wars-Logo.png"


export const Navbar = () => {
	const { store, actions} = useContext(Context)
	// const handleDeleteFavorite = (index) => {
    //     actions.deleteFavorite(index);
	// };

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="logoDiv">
				<Link to="/">
					<img className="Logo w-25" src={Logo} alt="Star Wars Logo"/>
				</Link>
			</div>
			<div className="dropdown">
				<button className="btn btn-outline-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites
				</button>
				<ul className="dropdown-menu">
					<li>dropdown list</li>
					<li>empty list</li>
				</ul>

			</div>


			{/* <div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div> */}
		</nav>


	);
};



// import React, {useContext} from "react";
// import { Link } from "react-router-dom";
// import { Context } from "../store/appContext";
// import Logo from "../../img/Star-Wars-Logo.png"


// export const Navbar = () => {
// 	const { store, actions} = useContext(Context)
// 	// const handleDeleteFavorite = (index) => {
//     //     actions.deleteFavorite(index);
// 	// };

// 	return (
// 		<nav className="navbar navbar-light bg-light mb-3">
// 			<div>
// 				<Link to="/">
// 					<img className="Logo" src={Logo} alt="Star Wars Logo"/>
// 				</Link>
// 			</div>
// 			<div className="dropdown">
// 				<button className="btn btn-outline-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
// 					Favorites
// 				</button>
// 				<ul className="dropdown-menu">
// 					<li>dropdown list</li>
// 					<li>empty list</li>
// 				</ul>

// 			</div>


// 			{/* <div className="ml-auto">
// 				<Link to="/demo">
// 					<button className="btn btn-primary">Check the Context in action</button>
// 				</Link>
// 			</div> */}
// 		</nav>


// 	);
// };

