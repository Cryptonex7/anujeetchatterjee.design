import React, {Component} from'react';




class Subscribe extends Component{
    constructor(props){
        super(props);
        this.state = {
            subscribe: "init",
            email: '',
            joined: new Date()
        }
    }
    onEmailChange = (event) => {
        this.setState({email: event.target.value});
    }
    onSubscribe = () =>{
        if(this.state.email.includes("@") && this.state.email.includes("."))
        {            
            fetch('https://ac-server.herokuapp.com/subscribe', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email: this.state.email
                })
            })
            .then(response => response.json())
            .then(data => {
                //console.log(data);
                if(data === '200') 
                    this.setState({subscribe: "true"});
                else if (data.detail === `Key (email)=(${this.state.email}) already exists.`)
                    this.setState({subscribe: "exists"})
                    //console.log("Email Registered");
                else this.setState({subscribe: "err"})
            })
        }
        else this.setState({subscribe: "invalid"});
//        console.log("Invalid Email");

    }
    
    render(){

        switch(this.state.subscribe){
            case "init":
                return(
                    <div className="subscribe sub-bar sub-content">
                        <br/>
                        <p className="subscribe-text"><span className="red-text">Subscribe to</span> #<span className="gray-text">the</span>Grand<span className="red-text">Portfolio</span> to stay updated with my latest works.</p>
                        <input type="email" className= 'email-box' onChange={this.onEmailChange} placeholder='Enter Your Email to Subscribe'  name="email" id="sub-email"/>
                        <button type="submit" className='sub-btn' onClick={() => this.onSubscribe()}>Subscribe</button>
                
                    </div>
                );
                break;

            case "true":
                return(
                    <div className="subscribe sub-bar sub-content">
                        <br/>
                        <p className="subscribe-text">
                            <span className="red-text">Thank you for subscribing to </span> 
                            #<span className="gray-text">the</span>Grand<span className="red-text">Portfolio</span>. 
                            <br/>You will recieve updates of my latest works as soon as they are published.
                            <br/>Follow me on my social media know more about me and my work.
                        </p>
                    </div>
                );
                break;

            case "invalid":
                return(
                    <div className="subscribe sub-bar sub-content">
                        <p className='red-text'><b>Invalid Email. Please Try Again.</b></p>
                        <br/>
                        <p className="subscribe-text"><span className="red-text">Subscribe to</span> #<span className="gray-text">the</span>Grand<span className="red-text">Portfolio</span> to stay updated with my latest works.</p>
                        <input type="email" className= 'email-box' onChange={this.onEmailChange} placeholder='Enter Your Email to Subscribe'  name="email" id="sub-email"/>
                        <button type="submit" className='sub-btn' onClick={() => this.onSubscribe()}>Subscribe</button>
                    </div>
                );
                break;

            case "exists":
                return(
                    <div className="subscribe sub-bar sub-content">
                        <p className='red-text'><b>Already a Subscriber. Please Try a different Email ID.</b></p>
                        <br/>
                        <p className="subscribe-text"><span className="red-text">Subscribe to</span> #<span className="gray-text">the</span>Grand<span className="red-text">Portfolio</span> to stay updated with my latest works.</p>
                        <input type="email" className= 'email-box' onChange={this.onEmailChange} placeholder='Enter Your Email to Subscribe'  name="email" id="sub-email"/>
                        <button type="submit" className='sub-btn' onClick={() => this.onSubscribe()}>Subscribe</button>
                    </div>
                );
                break;
            default:
                return (
                    <div className="subscribe sub-bar sub-content">
                        <p className='red-text'><b>Something went wrong. Please Try Again.</b></p>
                        <br/>
                        <p className="subscribe-text"><span className="red-text">Subscribe to</span> #<span className="gray-text">the</span>Grand<span className="red-text">Portfolio</span> to stay updated with my latest works.</p>
                        <input type="email" className= 'email-box' onChange={this.onEmailChange} placeholder='Enter Your Email to Subscribe'  name="email" id="sub-email"/>
                        <button type="submit" className='sub-btn' onClick={() => this.onSubscribe()}>Subscribe</button>
                
                    </div>
                );
        }


        // if (this.state.subscribe === "init"){
        //     return(
        //         <div className="subscribe sub-bar sub-content">
        //             <br/>
        //             <p className="subscribe-text"><span className="red-text">Subscribe to</span> #<span className="gray-text">the</span>Grand<span className="red-text">Portfolio</span> to stay updated with my latest works.</p>
        //             <input type="email" className= 'email-box' onChange={this.onEmailChange} placeholder='Enter Your Email to Subscribe'  name="email" id="sub-email"/>
        //             <button type="submit" className='sub-btn' onClick={() => this.onSubscribe()}>Subscribe</button>
            
        //         </div>
        //     );
        // }

        // else if (this.state.subscribe === "true"){
        //     return(
        //         <div className="subscribe sub-bar sub-content">
        //             <br/>
        //             <p className="subscribe-text">
        //                 <span className="red-text">Thank you for subscribing to </span> 
        //                 #<span className="gray-text">the</span>Grand<span className="red-text">Portfolio</span>. 
        //                 <br/>You will recieve updates of my latest works as soon as they are published.
        //                 <br/>Follow me on my social media know more about me and my work.
        //             </p>
        //         </div>
        //     );
        // }

        // else if (this.state.subscribe === "invalid"){
        //     return(
        //         <div className="subscribe sub-bar sub-content">
        //             <p className='red-text'><b>Invalid Email. Please Try Again.</b></p>
        //             <br/>
        //             <p className="subscribe-text"><span className="red-text">Subscribe to</span> #<span className="gray-text">the</span>Grand<span className="red-text">Portfolio</span> to stay updated with my latest works.</p>
        //             <input type="email" className= 'email-box' onChange={this.onEmailChange} placeholder='Enter Your Email to Subscribe'  name="email" id="sub-email"/>
        //             <button type="submit" className='sub-btn' onClick={() => this.onSubscribe()}>Subscribe</button>
        //         </div>
        //     );
        // }

        // else if (this.state.subscribe === "exists"){
        //     return(
        //         <div className="subscribe sub-bar sub-content">
        //             <p className='red-text'><b>Already a Subscriber. Please Try a different Email ID.</b></p>
        //             <br/>
        //             <p className="subscribe-text"><span className="red-text">Subscribe to</span> #<span className="gray-text">the</span>Grand<span className="red-text">Portfolio</span> to stay updated with my latest works.</p>
        //             <input type="email" className= 'email-box' onChange={this.onEmailChange} placeholder='Enter Your Email to Subscribe'  name="email" id="sub-email"/>
        //             <button type="submit" className='sub-btn' onClick={() => this.onSubscribe()}>Subscribe</button>
        //         </div>
        //     );
        // }

        // else return (
        //     <div className="subscribe sub-bar sub-content">
        //         <p className='red-text'><b>Something went wrong. Please Try Again.</b></p>
        //         <br/>
        //         <p className="subscribe-text"><span className="red-text">Subscribe to</span> #<span className="gray-text">the</span>Grand<span className="red-text">Portfolio</span> to stay updated with my latest works.</p>
        //         <input type="email" className= 'email-box' onChange={this.onEmailChange} placeholder='Enter Your Email to Subscribe'  name="email" id="sub-email"/>
        //         <button type="submit" className='sub-btn' onClick={() => this.onSubscribe()}>Subscribe</button>
        
        //     </div>
        // );
    }
}

export default Subscribe;