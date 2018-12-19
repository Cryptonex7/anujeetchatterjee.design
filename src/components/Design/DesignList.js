import React from 'react';
import DesignCard from './DesignCard';
import { DesignObj } from "../../Lists";

const DesignList = () =>{
    return (
        <div>
            {   
                DesignObj.map((item, i) => {
                    return(
                        <DesignCard 
                            key={i} 
                            img={DesignObj[i].img} 
                            caption={DesignObj[i].caption} 
                            />
                    );
                })
            }
        </div>
    );
}

export default DesignList;