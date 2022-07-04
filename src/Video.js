import React, { useRef, useState } from 'react'
import "./Video.css"
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';


function Video({ url, channel, description, song, likes, messages, shares }) {

const [playing, setPlaying] = useState(false);
const videoRef = useRef(null);

const handleVideoPress = () => {
    //if video is playing, stop it...
    if (playing) {
        videoRef.current.pause();
        setPlaying(false);
    } //otherwise play it...
    else {
        videoRef.current.play();
        setPlaying(true);
    }
    
}

  return (
    <div className='video'>
    
    <video 
    onClick={handleVideoPress}
    className='video_player' 
    loop 
    ref={videoRef}
    src={url}
    />
    
    
    
    { /*video footer*/ }
    <VideoFooter channel={channel} description={description} song={song} />

    { /*video sidebar*/ }
    <VideoSidebar likes={likes} shares={shares} messages={messages}/>
    </div>
  )
}

export default Video