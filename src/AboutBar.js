import React from'react';

const AboutBar =() =>{
    return(
        <div className="AboutBar">
            <div className="">    
                <div className="bar">
                    <div className="about">
                        <h1>About <span className="red-text"> Me</span></h1>
                    </div>
                    <div className="about-content">
                        <span className="red-text"> Designing </span>is what makes me think and feel about the project. 
                        Since, I always make sure to create stuff with the required <span className="red-text">feelings</span>, 
                        what comes out of it looks great.
                        
                        <br/><span className="red-text">"Creating Stuff" </span>is what I've always 
                        <span className="red-text">loved </span>since my childhood as that's when I can see and realise 
                        what all I am capable of.
                        
                        <br/>So with every project, I try to <span className="red-text">improve </span>to do better than 
                        the last one, and inturn, doing what I <span className="red-text">want</span> to do.
                    </div>
                    <br/>
                    <h2 className="follow tc"> <span className="red-text">Follow</span> Me</h2>
                    <div className="social-grid">
                        <a href="https://www.facebook.com/anujeetC" rel="noopener noreferrer" target="_blank" className="facebook-link">
                            <svg className="social-icons" version="1.1" id="_x31_6" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                                viewBox="0 0 100 100" >
                                <path className="facebook" d="M53.8,39.9v-4.1c0-1.9,1.3-2.4,2.2-2.4c0.9,0,5.7,0,5.7,0v-8.7h-7.8c-8.7,0-10.6,6.4-10.6,10.6v4.6h-5V46v4h5.1
                                    c0,11.5,0,25.3,0,25.3h10.1c0,0,0-14,0-25.3h7.5l0.3-4l0.6-6.1H53.8z"/>
                            </svg>
                        </a>                    

                        <a href="https://www.instagram.com/anujeetchatterjee" rel="noopener noreferrer" target="_blank" className="facebook-link">
                            <svg className="social-icons" version="1.1" id="_x31_6" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                viewBox="0 0 100 100" >

                                <path className="instagram" d="M39.8,50c0-5.6,4.6-10.2,10.2-10.2S60.2,44.4,60.2,50S55.6,60.2,50,60.2S39.8,55.6,39.8,50L39.8,50z M60.6,30
                                H39.4c-5.2,0-9.4,4.3-9.4,9.4v21.1c0,5.2,4.3,9.4,9.4,9.4h21.1c5.2,0,9.4-4.3,9.4-9.4V39.4C70,34.2,65.8,30,60.6,30L60.6,30z
                                M39.4,32.3h21.1c4,0,7.1,3.1,7.1,7.1v21.1c0,4-3.1,7.1-7.1,7.1H39.4c-4,0-7.1-3.1-7.1-7.1V39.4C32.3,35.6,35.6,32.3,39.4,32.3
                                L39.4,32.3z M62.7,35.3c-1.1,0-2.1,1-2.1,2.1c0,1.1,1,2.1,2.1,2.1c1.1,0,2.1-1,2.1-2.1C64.8,36.3,63.8,35.3,62.7,35.3L62.7,35.3z
                                M62.9,50c0-7.1-5.8-12.9-12.9-12.9S37.1,42.9,37.1,50c0,7.2,5.8,12.9,12.9,12.9S62.9,57.1,62.9,50L62.9,50z"/>
                            </svg>
                        </a>                    
                        
                        <a href="https://www.linkedin.com/in/anujeet-chatterjee-10999/" rel="noopener noreferrer" target="_blank" className="facebook-link">
                            <svg className="social-icons" version="1.1" id="_x31_6" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                viewBox="0 0 100 100" >

                                <path className="linkedin" d="M27.7,50.5v21.9h10.4V48.7v-6.1H27.7V50.5z M72.1,51.7c-0.7-5.6-3.3-9.2-10.9-9.2c-4.5,0-7.5,1.6-8.7,4h-0.1v-4
                                H44v5.7v24.1h8.7V57.6c0-3.9,0.8-7.6,5.5-7.6c4.8,0,5.2,4.4,5.2,7.9v14.5h8.9V56C72.3,54.4,72.3,53,72.1,51.7L72.1,51.7z M32.9,27.7
                                c-2.9,0-5.2,2.3-5.2,5.2s2.3,5.2,5.2,5.2c2.9,0,5.2-2.3,5.2-5.2S35.7,27.7,32.9,27.7L32.9,27.7z"/>
                            </svg>
                        </a>                    
                        
                        <a href="https://www.plus.google.com/+AnujeetChatterjeeOfficial" rel="noopener noreferrer" target="_blank" className="facebook-link">
                            <svg className="social-icons" version="1.1" id="_x31_6" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                viewBox="0 0 100 100">
                                <path className="googleplus" d="M55,46.5c-3.6,0.1-7.3,0.1-10.9,0.1c-1,0-2.1-0.1-3.1,0c-0.2,0-0.5,0.2-0.5,0.4c0,2.1,0,4.2,0,6.4
                                c3,0,5.9,0,8.9,0c-0.1,0.4-0.2,0.8-0.3,1.1c-1.3,4.1-5.5,6.1-10.1,5.3c-5.6-0.9-9-6.1-8-11.7c0.1-0.8,0.4-1.6,0.7-2.3
                                c1.9-4.1,6.4-6.5,11-5.5c1.6,0.4,3,1.1,4.2,2.2c1.6-1.6,3.2-3.2,4.9-4.9c-0.1-0.1-0.3-0.2-0.4-0.4c-3.9-3.3-8.5-4.6-13.5-3.7
                                c-7.3,1.2-12.6,6.9-13.7,13.7c-0.5,2.9-0.3,5.9,0.8,8.9c2.8,7.1,10,11.5,17.6,10.6c3.8-0.4,7.1-1.8,9.7-4.5c3.9-4.1,4.9-9,4.2-14.5
                                C56.2,46.7,55.9,46.5,55,46.5L55,46.5z M71.6,47.1c-0.3,0-0.7,0-1.1,0c0-0.1,0-0.2,0-0.2c0-0.3,0-0.5,0-0.8c0-1.4,0-2.8,0-4.2
                                c0-0.2-0.3-0.6-0.4-0.6c-1.3-0.1-2.5-0.1-3.9-0.1c0,1.7,0,3.3,0,4.9c0,0.3,0,0.6,0,0.9c-2,0-3.9,0-5.9,0c0,0.5,0,0.8,0,1.1
                                c0.1,1,0.1,2.1,0.2,3.2c1,0.1,2,0.1,3.1,0.1c0.9,0,1.7,0,2.7,0c0,2,0,3.9,0,5.8c1.5,0,2.8,0,4.3,0c0-1.9,0-3.8,0-5.8
                                c2,0,3.8,0,5.8,0c0-1.1,0-2.2,0-3.3c0-0.4,0-0.7,0-1C74.8,47.1,73.2,47.1,71.6,47.1L71.6,47.1z"/>
                            </svg>
                        </a>                    

                        <a href="https://www.youtube.com/AnujeetCHatterjeeOfficial" rel="noopener noreferrer" target="_blank" className="facebook-link">
                            <svg className="social-icons youtube" version="1.1" id="_x31_6" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                viewBox="0 0 100 100">
                                <path className="youtube" d="M74.8,39.5c0,0-0.5-3.6-2-5.2c-1.9-2.1-4.1-2.1-5-2.2C60.7,31.5,50,31.5,50,31.5H50
                                c0,0-10.6,0-17.7,0.5c-1,0.1-3.2,0.2-5.1,2.2c-1.5,1.6-2,5.2-2,5.2s-0.5,4.3-0.5,8.5v0.5V52c0,4.3,0.5,8.5,0.5,8.5s0.5,3.6,2,5.3
                                c1.9,2.1,4.4,2,5.6,2.2c4,0.4,17.2,0.5,17.2,0.5s10.6-0.1,17.7-0.5c1-0.1,3.1-0.1,5-2.2c1.5-1.6,2-5.3,2-5.3s0.5-4.2,0.5-8.5v-3.3
                                V48C75.3,43.7,74.8,39.5,74.8,39.5L74.8,39.5z M58.5,49.4l-13.7,7.4V45.5V42l6.2,3.4L58.5,49.4z"/>
                            </svg>
                        </a>                    

                        <a href="https://www.github.com/Cryptonex7" rel="noopener noreferrer" target="_blank" className="facebook-link">
                            <svg className="social-icons" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    viewBox="0 0 100 100">
                                <path className="github" d="M50,28.1c-12.4,0-22.5,10.1-22.5,22.5c0,9.9,6.4,18.4,15.4,21.3c1.1,0.2,1.5-0.5,1.5-1.1c0-0.5,0-1.9,0-3.8
                                c-6.3,1.4-7.6-3-7.6-3c-1-2.6-2.5-3.3-2.5-3.3c-2-1.4,0.2-1.4,0.2-1.4c2.3,0.2,3.4,2.3,3.4,2.3c2,3.4,5.3,2.4,6.6,1.9
                                c0.2-1.5,0.8-2.4,1.4-3c-5-0.6-10.2-2.5-10.2-11.1c0-2.5,0.9-4.5,2.3-6c-0.3-0.6-1-2.9,0.2-6c0,0,1.9-0.6,6.2,2.3
                                c1.8-0.5,3.7-0.7,5.6-0.8c1.9,0,3.8,0.3,5.6,0.8c4.3-2.9,6.2-2.3,6.2-2.3c1.2,3.1,0.5,5.4,0.2,6c1.4,1.6,2.3,3.6,2.3,6
                                C64.3,58,59,59.9,54,60.5c0.8,0.7,1.5,2.1,1.5,4.2c0,3,0,5.4,0,6.2c0,0.6,0.4,1.3,1.5,1.1c9-3,15.4-11.4,15.4-21.3
                                C72.5,38.1,62.4,28.1,50,28.1"/>
                            
                            </svg>
                        </a>                    


                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutBar;