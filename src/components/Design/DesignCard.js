import React from 'react';

const DesignCard = ({img, caption}) => {
    return(
        <div className="music-card">
            <div className="thumbnail">
                <img src={img} alt='' className='thumb'/>
            </div>
            <div className="caption">
                {caption}
            </div>
        </div>
    );
}

export default DesignCard;