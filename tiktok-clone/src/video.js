import React, { useRef, useState } from 'react'
import "./video.css"
import VideoFooter from './VideoFooter'
import VideoSideBar from './VideoSideBar'






function Video ({ url, channel, description, Likes, Messages, Shares, name_of_song })
{


    const [playing, setPlaying] = useState(false)
    const videoRef = useRef(null)
    const handleVideoPress = () =>
    {
        if (playing) {
            // @ts-ignore
            videoRef.current.pause()
            setPlaying(false)
        }
        else {
            // @ts-ignore
            videoRef.current.play()
            setPlaying(true)
        }
    }

    return (
        <div className='Video'>

            <video className='Video_player'
                loop
                onClick={handleVideoPress}
                ref={videoRef}
                src={url}></video>
            <VideoFooter channel={channel} description={description} song_name={name_of_song} />
            <VideoSideBar Likes={Likes} Messages={Messages} Shares={Shares} />
        </div>
    )
}


export default Video
