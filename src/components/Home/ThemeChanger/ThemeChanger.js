import React from 'react';
import '../../../css/ThemeChanger.css';
import '../../../css/NavBar.css';

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
        <div className="">
            
            <div className="bottom ">
                <div id="red" onClick={()=>onColorChange('red')}>
                    <a onClick={()=>onColorChange('red')} className="tc-link"    id="" >Red</a>
                </div>
                <div id="green" onClick={()=> onColorChange('green')}>
                    <a onClick={()=> onColorChange('green')} className="tc-link"    id="" >Green</a>
                </div>
                <div id="blue" onClick={()=> onColorChange('blue')}>
                    <a onClick={()=> onColorChange('blue')} className="tc-link"    id="" >Blue</a>
                </div>
            </div>
            <div id="click">
                Click to Change Color Theme
            </div>
        </div>

    );
}

export default ThemeChanger; 