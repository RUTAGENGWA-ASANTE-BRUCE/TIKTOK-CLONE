import React, { useEffect, useState } from 'react'
import './App.css';
import Video from './video';
import axios from './axios.js'

// @ts-ignore
import Myvid from "./wankomye.mp4"

function App ()
{
  const [videoInformation, setVideoInformation] = useState([])
  useEffect(() =>
  {
    async function fetchData ()
    {
      const req = await axios.get("/tiktok/posts")
      setVideoInformation(req.data)
    }
    fetchData()
  }, [])
  console.log(videoInformation)
  return (
    <div className="App">
      <div className='app__videos'>

        {videoInformation.map((video) => (

          // @ts-ignore
          <Video url={video.url} channel={video.channel}
            // @ts-ignore
            description={video.description}
            // @ts-ignore
            Likes={video.Likes}
            // @ts-ignore
            Shares={video.Shares}
            // @ts-ignore
            Messages={video.Messages}
            //@ts-ignore
            name_of_song={video.songName} />
        ))}
        <Video url={Myvid} channel={"Alto Ft Uncle Austin"} description={"Nice song"} Likes={789} Shares={567} Messages={456} name_of_song={"Wankomye"}></Video>

      </div>
    </div>
  );
}

export default App;