import './App.css';
import React from "react"
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import RedoIcon from '@mui/icons-material/Redo';
import {Post} from './components/post';
// import {Gif} from './components/gif';

function App(gifPost) {
  console.log("gifPost", gifPost)
  return (
    <>
    <Post/>
      <div className="App">
        <div className='header'>
          <div className='left'>
            <img src="jack.jpg" alt="avatar" id="jack" />
          </div>
          <div className='right'>
            <h3>Kaala Koduma Kathiravaa</h3>
            <p>2 hour . 🌍</p>
          </div>
          <div className='dots'>...</div>
        </div>
        <div className='content'>The Beautiful Look💕💕💕🥰 </div>
        <img id="post" src="https://scontent.fblr11-1.fna.fbcdn.net/v/t39.30808-6/289861215_596534665170235_7641983683909628350_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=UnAyL7_mF0EAX9VumBe&_nc_ht=scontent.fblr11-1.fna&oh=00_AT8Z6JFIUh-iRKunz7LRZwgTDWH8AV_5w1CH7FomwWq_PQ&oe=62D18D97" alt="jyothika" />
        <div id="emoji">
          <p>💟👍 470</p>
          <p>32 comments 5 shares</p>
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
      </>
      );
}

      export default App;
