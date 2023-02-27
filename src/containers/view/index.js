import React,{useEffect, useState} from "react";
import { useParams } from "react-router-dom";

function View(){
    const {imageUrl} = useParams();
    return (<div>imageUrl</div>);
}

export default View;


