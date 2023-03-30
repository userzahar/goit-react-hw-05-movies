import { getReviews } from "apiService/apiService";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

export function Reviews(){
    const[person, setPerson]=useState([])
    const { id } = useParams();
    useEffect(()=>{
        getReviews(id)
            .then(res=>{
                console.log("s",res.data.results)
            setPerson(res.data.results)
        })
            .catch(er=>console.log(er))
    },[id])
    return <ul>
        {person.length === 0  ? <p>We don`t have any reviews for this movie</p> 
        : (person.map(({author,content, id})=> <li key={id}>
            <p>{author}</p>
            <p>{content}</p>
        </li>))}
    </ul>
    
    // <p>We don`t have any reviews for this movie</p>
}