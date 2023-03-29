import { getCast } from "apiService/apiService"
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
const IMAGE_NONE = "https://via.placeholder.com/90x120";
const IMAGE_PERSON = "https://image.tmdb.org/t/p/w200";

export function Credits(){
    const[person, setPerson]=useState([])
    const { id } = useParams();
    console.log("💢 ~ id:", id)
    useEffect(()=>{
        getCast(id)
            .then(res=> {
                console.log(res.data.cast)
                return setPerson(res.data.cast)})
            .catch(er=>console.log(er))
    },[])
    
    return <ul>
        {person.map(({name,character,profile_path,id})=> <li key={id}>
                    <p>{name}</p>
                   <p>Character: {character}</p>
                    <img src={profile_path ? (IMAGE_PERSON+profile_path) : IMAGE_NONE} alt={name} width="90" height="120" />
                </li>)}
    </ul> 
}
//  