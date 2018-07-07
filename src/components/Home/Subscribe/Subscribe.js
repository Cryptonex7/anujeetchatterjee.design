import React, {Component} from'react';




class Subscribe extends Component{
    constructor(props){
        super(props);
        this.state = {
            subscribe: false
        }
    }
    
    onSubscribe = () =>{
        this.setState({subscribe: true})
    }
    
    render(){
        return(
            <div>
                {this.state.subscribe === false
                ?   <div className="subscribe sub-bar sub-content">
                        <br/>
                        <p className="subscribe-text"><span className="red-text">Subscribe to</span> #<span className="gray-text">the</span>Grand<span className="red-text">Portfolio</span> to stay updated with my latest works.</p>
                        <input type="email" className= 'email-box' placeholder='Enter Your Email to Subscribe'  name="email" id="sub-email"/>
                        <button type="submit" className='sub-btn' onClick={()=> this.onSubscribe()}>Subscribe</button>
                
                    </div>
                :   <div className="subscribe sub-bar sub-content">
                        <br/>
                        <p className="subscribe-text">
                            <span className="red-text">Thank you for subscribing to </span> 
                            #<span className="gray-text">the</span>Grand<span className="red-text">Portfolio</span>. 
                            <br/>You will recieve updates of my latest works as soon as they are published.
                            <br/>Follow me on my social media know more about me and my work.</p>
                        
                
                    </div>
                }   
            </div> 
        )}
}

export default Subscribe;