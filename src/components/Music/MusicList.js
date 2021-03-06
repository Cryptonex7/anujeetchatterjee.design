import React from 'react';
import MusicCard from './MusicCard';

const MusicList = ({list}) =>{
    return (
        <div className="m-cards">
            {   
                list.map((item, i) => {
                    if (i!==0)
                        return(
                            <MusicCard 
                                key={i} 
                                img={list[i].snippet.thumbnails.high.url} 
                                caption={list[i].snippet.title} 
                                link={list[i].snippet.resourceId.videoId} 
                                src={list[i].snippet.resourceId.videoId}/>
                        );
                    return null;
                })
            }
        </div>
    );
}

export default MusicList;