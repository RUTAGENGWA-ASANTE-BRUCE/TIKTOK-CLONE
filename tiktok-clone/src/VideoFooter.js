import React from 'react'
import "./VideoFooter.css"
import MusicNoteIcon from "@material-ui/icons/MusicNote"
import Ticker from "react-ticker"

function VideoFooter ({ channel, description, song_name })
{
    return (
        <div className='videoFooter'>
            <div className='videoFooter_text'>
                <h3>{channel}</h3>
                <p>{description}</p>
                <div className='videoFooter_ticker'>
                    <MusicNoteIcon className='videoFooter_Icon' />
                    <Ticker mode='smooth'>
                        {({ index }) => (
                            <>
                                <p>{song_name}</p>
                            </>
                        )}
                    </Ticker>

                </div>
            </div>
            <img className='videoFooter_record' src='https://cdn.onlinewebfonts.com/svg/img_496601.png' alt='' />

        </div>
    )
}

export default VideoFooter
