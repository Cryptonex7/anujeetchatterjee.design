import React from 'react';
import MusicCard from './MusicCard';

const MusicList = ({list}) =>{
    return (
        <div>
            {   
                list.map((item, i) => {
                    return(
                        <MusicCard 
                            key={i} 
                            img={list[i].snippet.thumbnails.high.url} 
                            caption={list[i].snippet.title} 
                            link={list[i].snippet.resourceId.videoId} 
                            src={list[i].snippet.resourceId.videoId}/>
                    );
                })
            }
        </div>
    );
}

export default MusicList;