import React from 'react';
import MusicFeaturedCard from './MusicFeaturedCard';

const MusicFeaturedList = ({list}) =>{
    return (
        <div className="m-cards">
            {   
                list.map((item, i) => {
                    if (i===0)
                        return(
                            <MusicFeaturedCard 
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

export default MusicFeaturedList;