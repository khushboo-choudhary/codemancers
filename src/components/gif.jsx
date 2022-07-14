import React, {useState} from "react";
import axios from "axios";

import "./gif.css";

export const Gif = ({data}) => {

    const [gifs, setGifs] = useState([]);

    const handleSearch = (e) => {
        // eslint-disable-next-line no-cond-assign
        if(gifs.length = 0)
         return
         axios.get(`https://api.giphy.com/v1/gifs/search?api_key=U8027Ih3mnTlMifOW0CY1LnBTtUT0Gul&q=${e.target.value}&limit=25&offset=0&rating=g&lang=en`).then(res => {
            console.log("giphy",res.data)
            if(e.target.value){
            setGifs(res.data.data);
            }else{
                alert("Gif Not Found")
            }
        },[])
        .catch((err)=> {
            console.log(err.message);
            alert("Gif Not Found");
        });
       
    }

    return (
        <div>
            
            <div className="gifs">
            <input className="inputGif" placeholder="search gif..." type="text" onChange={(e) => {handleSearch(e)}} />
            {gifs.map((gif) => {
                return(
                    
                 <img className="gifImages" key={gif.id} src={gif.images.original.url} onClick={() => {data(gif.images.original.url)}} width={"100%"} alt="" />
              
                 )
                })}
            </div>
        </div>
    )
}