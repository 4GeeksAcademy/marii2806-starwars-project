import React, {useState, useEffect } from "react";

import { Link } from "react-router-dom";

export const Card = ({item, category}) => {
    const [fetchItem, setFetchedItem] = useState(null)
    useEffect(() => {
        fetch("https://www.swapi.tech/api/starships/" + item.uid)
        .then((resp) => resp.json())
        .then((starshipInfo) => {
            setFetchedItem(starshipInfo.result);
            console.log(fetchItem)
        })
        .catch((error) => console.log(error));
    },[])
    return (
        <div>
            {item !== undefined ?(
               <div className="card" style={{width: "18rem"}}>
                <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{fetchItem?.properties.name}</h5>
                        {/* <p className="card-text">{category == "characters"? item.properties.gender : category == "planets"? item.properties.population : item.properties.manufacturer}</p>
                        <p className="card-text">{item.properties.eye_color}</p>
                        <p className="card-text">{item.properties.hair_color}</p>
                        <Link to={"/characters/" + item.uid} className="btn btn-primary">More info</Link> */}
                    </div>
                </div> 
            ): null}
        </div>   
    )







    
}// import React, { useContext, useState, useEffect } from "react";
// import { Context } from "../store/appContext";
// import { Link } from "react-router-dom";

// export const Card = ({item}) => {
//     const {store, actions} = useContext(Context);
//     const [detail, setDetail] = useState();
//     useEffect(() => {
//         actions.getCharacter(item?.uid)
//             .then(detailCharacter => setDetail(detailCharacter));
//     }, []);
//     return (
//         <React.Fragment>
//             {detail !== undefined ?(
//                <div className="card" style={{width: "18rem"}}>
//                 <img src="..." className="card-img-top" alt="..."/>
//                     <div className="card-body">
//                         <h5 className="card-title">{detail.properties.name}</h5>
//                         <p className="card-text">{detail.properties.gender}</p>
//                         <p className="card-text">{detail.properties.eye_color}</p>
//                         <p className="card-text">{detail.properties.hair_color}</p>
//                         <Link to={"/characters/" + item?.uid} className="btn btn-primary">More info</Link>
//                     </div>
//                 </div> 
//             ): null}
//         </React.Fragment>   
//     )
// }

