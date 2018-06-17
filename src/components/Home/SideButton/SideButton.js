import React from 'react';
import '../../../css/SideButton.css';
import '../../../css/svg.css';


const SideButton = ({visibilityFunction}) => {
    return(
      <div className="SideButton">
        <div  onClick={visibilityFunction} className='toggle-btn side-toggle'>
          <svg  className="nav-btn" height="40px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="512px" xmlns="http://www.w3.org/2000/svg" >
            <g  className='white'>
              <g className="bar-1 trans" id ="baricon-1">
                <rect  height="320" width="32" y="96" x="190"/>
              </g>
              <g className="bar-2 trans"  id ="baricon-2">
                <rect  height="320" width="32" y="96" x="292"/>
              </g>
            </g>
          </svg>
        </div>
      </div>   
    );
}

export default SideButton; 