import React, { Component } from 'react';
import Card from './Card';
import cat1 from "../assets/cat1.jpg";
import cat2 from "../assets/cat2.jpg";
import cat3 from "../assets/cat3.jpg";


import '../css/Friends.css';




class MainContainer extends Component {

    constructor() {
        super();
        this.state = { 
            height: window.innerHeight, 
            width: window.innerWidth,
            title: 'no title',
            friend: {
                Shivangi : {
                name: 'Shivangi',
                image: `${cat1}`,
                message: " Integer ullamcorper porta nibh id malesuada. Integer ultrices dolor lacus, nec accumsan tellus convallis ac. Morbi mauris nisi, fermentum ut risus nec, rhoncus sollicitudin augue. Morbi eu varius massa. Fusce nisl tortor, condimentum et finibus vitae, condimentum eget diam. Praesent eu massa quis quam eleifend laoreet a eu orci. Curabitur pulvinar tellus ex, nec pretium sapien interdum id. Cras dictum vestibulum gravida. Pellentesque dignissim arcu eu mauris placerat, non viverra nibh sollicitudin. Cras molestie ante non massa rutrum tristique. Vestibulum in magna congue, faucibus mi ut, pulvinar sapien. Nam ullamcorper sapien at interdum vestibulum. Vivamus nisl odio, egestas eget nisi ac, sodales aliquet libero. Vestibulum eu elementum velit.",
                },
                Vaibhav: {
                name: 'Vaibhav',
                image: `${cat2}`,
                message: " Phasellus convallis, justo ultricies tincidunt tempor, nulla purus dapibus dolor, in condimentum leo arcu in nunc. Aliquam hendrerit tempus magna, vel vulputate arcu iaculis vitae. Nunc congue auctor purus et luctus. Pellentesque et eleifend libero, facilisis pulvinar lorem. Donec feugiat viverra est, sit amet feugiat tortor euismod faucibus. Cras ultricies suscipit libero nec accumsan. Maecenas faucibus neque nec nisl vehicula, vel iaculis ante tempus.",
                },
                Anujeet :{
                name: 'Anujeet',
                image: `${cat3}`,
                message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id bibendum diam. Suspendisse ultricies volutpat leo, pharetra molestie tortor volutpat interdum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed placerat varius accumsan. Curabitur ut rutrum neque. Cras congue felis aliquam ex pulvinar vulputate. Suspendisse imperdiet, enim vitae feugiat pulvinar, orci sapien tincidunt est, ac viverra velit mauris interdum tortor. Etiam id nisl purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam et tellus volutpat, eleifend turpis sed, porttitor tortor. In viverra, diam vitae tempus feugiat, mauris odio rhoncus justo, non dictum turpis augue eget nisi. Cras et justo tortor. Nulla suscipit velit dictum nisi feugiat congue. In pellentesque accumsan arcu nec convallis. Nullam consequat lectus at ipsum tincidunt, ut feugiat odio eleifend. Donec sit amet sapien vehicula, vulputate massa vel, sagittis augue.",
                }
            },
        };
        this.updateDimensions = this.updateDimensions.bind(this);
    }
    
      
    componentDidMount() {
        console.log(this.state.height);
        window.addEventListener("resize", this.updateDimensions);

    }
    
    
    updateDimensions = () => {
        this.setState({
            height: window.innerHeight, 
            width: window.innerWidth
        });
    }


    
    render(){
        
        
        return(
            
            <div className="maincont">
                    <Card person = {this.state.friend.Shivangi}/>
                    <Card person = {this.state.friend.Vaibhav}/>
                    <Card person = {this.state.friend.Anujeet}/>
                
            </div>
            
            
        );
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }
   
}

export default MainContainer;



    
    