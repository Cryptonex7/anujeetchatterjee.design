import React from 'react';
import './ThemeChanger.css';


const ThemeChanger = ({onClickR, onClickG, onClickB}) => {
    return(
        <div className="">
            <div className="bottom dtc v-mid w-75 tr">
                <a onClick={()=> onClickR()} className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns"  title="About">RED</a>
                <a onClick={()=> onClickG()} className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns"  title="Store">GREEN</a>
                <a onClick={()=> onClickB()} className="link dim dark-gray f6 f5-ns dib"  title="Contact">BLUE</a>
            </div>
        </div>

    );
}

export default ThemeChanger; 