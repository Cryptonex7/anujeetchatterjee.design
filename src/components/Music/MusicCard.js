import React from 'react';


const MusicCard = ({img, caption, link, src}) => {
    return(
        <div className="music-card">
            <a href={`https://www.youtube.com/watch?v=${src}`} target="blank" id="yt-link">
                <div className="thumbnail">
                    {/* <img src={img} alt='' className='thumb'/> */}
                    <iframe width="100%" height="210" 
                    title='iframe'
                    src={`https://www.youtube.com/embed/${src}?controls=0`}
                    frameborder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                    
                    </iframe>


                </div>
                <div className="caption">
                    {caption}
                    
                </div>
            </a>
        </div>
    );
}

export default MusicCard;