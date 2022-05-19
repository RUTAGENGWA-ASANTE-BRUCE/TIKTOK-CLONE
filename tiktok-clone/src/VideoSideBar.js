import React, { useState } from 'react'
import "./VideoSideBar.css"
import MessageIcon from "@material-ui/icons/Message"
import ShareIcon from "@material-ui/icons/Share"
import FavoriteIcon from "@material-ui/icons/Favorite"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"

function VideoSideBar ({ Likes, Shares, Messages })
{
    const [liked, setLiked] = useState(false)
    return (
        <div className='videoSideBar'>
            <div className='VideoSideBar_Button'>
                {liked ? (
                    <FavoriteIcon onClick={() => setLiked(false)} />
                ) : (<FavoriteBorderIcon
                    onClick={() => setLiked(true)}
                />)}
                <p>{Likes}</p>
            </div>
            <div className='VideoSideBar_Button'>
                <MessageIcon />
                <p>{Messages}</p>
            </div>
            <div className='VideoSideBar_Button'>
                <ShareIcon />
                <p>{Shares}</p>
            </div>
        </div>
    )
}

export default VideoSideBar
