import axios from "axios";
import { useEffect, useState } from "react";

export default function RandomGif(){
    const API_KEY = process.env.REACT_APP_GIPHY_API_KEY

    const Random = () =>{
        const[rndGif,setrndGif] = useState("");
        async function dataFetch(){
            const url = `http://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
             let data =await axios.get(url);
             console.log(data);
        }
        useEffect( () =>{
            dataFetch();
        },[]);
    }
    Random();

    function clickHandler(){
      
    }
    return(
        <div className="randomgif random">
            <div>Random Gif</div>
            {/* <img src={rndGif} alt="random image"></img> */}
            <button onClick={clickHandler}>Generate</button>
        </div>
    )
}