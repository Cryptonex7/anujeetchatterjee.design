import React from 'react';
import '../../../css/ThemeChanger.css';

const onColorChange = (clr) => {
    let x = document.getElementsByTagName("html")[0];
    switch(clr){
        case 'red': 
            x.style.cssText = "--ac-primary: #BF0000" ;
            break;
        case 'green': 
            x.style.cssText = "--ac-primary: #00BF00" ;
            break;
        case 'blue': 
            x.style.cssText = "--ac-primary: #4299ff" ;
            break;
        default:
    }
}


const ThemeChanger = () => {
    return(
        <div id = 'theme-container'>
            
            <div className="bottom " id = 'theme-container'>
                <div id="red" onClick={()=>onColorChange('red')}>
                    <div onClick={()=>onColorChange('red')} className="tc-link"    id="" >Red</div>
                </div>
                <div id="green" onClick={()=> onColorChange('green')}>
                    <div onClick={()=> onColorChange('green')} className="tc-link"    id="" >Green</div>
                </div>
                <div id="blue" onClick={()=> onColorChange('blue')}>
                    <div onClick={()=> onColorChange('blue')} className="tc-link"    id="" >Blue</div>
                </div>
            </div>
            <div id="click">
                Click to Change Color Theme
            </div>
        </div>

    );
}

export default ThemeChanger; 