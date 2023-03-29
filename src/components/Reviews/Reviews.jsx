import { useState } from "react";
import { useParams } from "react-router-dom";

export function Reviews(){
    const[person, setPerson]=useState([])
    const { id } = useParams();
    <></>
    return <p>We don`t have any reviews for this movie</p>
}