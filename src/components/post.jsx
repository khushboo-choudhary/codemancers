import React, { useState } from "react";
import "./Post.css";
import Button from "@mui/material/Button";
import CreateIcon from '@mui/icons-material/Create';
import CollectionsIcon from '@mui/icons-material/Collections';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import CloseIcon from '@mui/icons-material/Close';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GifBoxIcon from '@mui/icons-material/GifBox';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LockIcon from '@mui/icons-material/Lock';
import { Gif } from "../components/gif";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import RedoIcon from '@mui/icons-material/Redo';


export const Post = () => {
    const [data, setData] = useState("");
    const [value, setValue] = useState(0);
    const [gif, setGif] = useState("");

    const handlePost = () => {

        setGif(data)
        setData("")
    }


    return (
        <div className='post_Main'>
            <div className='post_icons'>

                <p className='post_png'><CreateIcon /></p>
                <p className='post_p'>Compsoe Post</p>
                <hr className='hr' />
                <p className='post_png'><CollectionsIcon /></p>
                <p className='post_p'>Photo/Video Album</p>
                <hr className='hr' />
                <p className='post_png'><VideoCallIcon /></p>
                <p className='post_p'>Live Video</p>
                <hr className='hr' />
                <p className='close'><CloseIcon /></p>
            </div>


            <div className="Post-body">
                {/* Post input box  */}
                <div className='textfield'>
                    <img id="avatar" src="Profile-pic.jpg" alt="avatar" />
                    <input type="text" placeholder="Write Something here..." id="text" />

                </div>


                <div className='button_type'>
                    <Button  sx={{ fontSize: 10, backgroundColor: "rgb(241, 238, 238)", color: "black" }}>
                        <PersonAddIcon fontSize="small" style={{ color: "rgb(121, 200, 243)" }} /> Tag friends
                    </Button>
                    <Button  sx={{ fontSize: 10, backgroundColor: "rgb(241, 238, 238)", color: "black" }}>
                        <LocationOnIcon fontSize="small" style={{ color: "rgb(243, 111, 111)" }} />check in
                    </Button>
                    <Button onClick={() => { setValue(1) }} sx={{ fontSize: 10, backgroundColor: "rgb(241, 238, 238)", color: "black" }}>
                        <GifBoxIcon fontSize="small" style={{ color: "rgb(213, 171, 250)" }} /> gif
                    </Button>
                    <Button  sx={{ fontSize: 10, backgroundColor: "rgb(241, 238, 238)", color: "black" }}>
                        <CalendarMonthIcon fontSize="small" style={{ color: "rgb(243, 111, 111)" }} /> Tag event
                    </Button>


                </div>
                <div className="footer">
                        <Button sx={{ fontSize: 10, border: 1, color: "black",width:"50%" }}>
                            <LockIcon fontSize="small" /> Only me
                        </Button>
                        <Button onClick={handlePost} sx={{ fontSize: 10, width:"50%"}}>
                            Post
                        </Button>
                    </div>
                {/* div for showing gif  */}
                <div className="myGif">
                    {data ? <img width={"100%"} src={data} alt="" /> : ""}
                </div>

                {/* imported fetched gif from Gif.jsx  */}
                <div >
                    {value ? <Gif data={setData} /> : null}

                </div>
            </div>

           
        <div className="App2">
            <div className='header'>
          <div className='left'>
            <img src="jack.jpg" alt="avatar" id="jack" />
          </div>
          <div className='right'>
            <h3>EMoji fans Club</h3>
            <p>10 mins. 🌍</p>
          </div>
          <div className='dots'>...</div>
        </div>
        <div className='content'>The Awesome Emoji💕💕💕🥰 </div>
        
        {/* on click post gif will show in this div on UI  */}
        <div className="posted-data">
                {gif ? <img width={"100%"} src={gif} alt="" /> : ""}
            </div>
        <div id="emoji">
          <p>💟👍 890</p>
          <p>40 comments 10 shares</p>
        </div>
        <div className='icons'>

          <p className='png'><ThumbUpOffAltIcon /></p>
          <p className='p'>Like</p>

          <p className='png'><ChatBubbleOutlineIcon /></p>
          <p className='p'>Comment</p>

          <p className='png'><RedoIcon /></p>
          <p className='p'>Share</p>

        </div>
        </div>
        </div>
    )
}