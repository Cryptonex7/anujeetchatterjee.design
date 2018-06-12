import React from 'react';
import '../../css/ThemeChanger.css';
import '../../css/NavBar.css';



const ThemeChanger = ({onClickR, onClickG, onClickB}) => {
    return(
        <div className="">
            
            <div className="bottom v-mid">
                <div id="red" onClick={()=> onClickR()}>
                    <a onClick={()=> onClickR()} className="link dim mr3 mr4-ns"    id="" >Red</a>
                </div>
                <div id="green" onClick={()=> onClickG()}>
                    <a onClick={()=> onClickG()} className="link dim mr3 mr4-ns"    id="" >Green</a>
                </div>
                <div id="blue" onClick={()=> onClickB()}>
                    <a onClick={()=> onClickB()} className="link dim "              id="" >Blue</a>
                </div>
            </div>
            <div id="click">
                Click to Change Color Theme
            </div>
        </div>

    );
}

export default ThemeChanger; 