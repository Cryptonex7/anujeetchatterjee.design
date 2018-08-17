import React, {Component} from'react';
class Card extends Component {

    constructor(props) {
        super(props);
        this.state = { 
          height: window.innerHeight, 
          width: window.innerWidth
        };
        this.updateDimensions = this.updateDimensions.bind(this);
    }
    
      
    componentDidMount() {
        console.log(this.state.height);
        window.addEventListener("resize", this.updateDimensions);
    }
    
    updateDimensions() {
        this.setState({
            height: window.innerHeight, 
            width: window.innerWidth
        });
    }


    render(){

        return(
            <div className="AboutBar">
                    <div className="bar">
                        <div className="about-content">
                            {this.props.person.name}<br/><br/>
                            <img src={this.props.person.image} className="image"/><br/><br/>
                            {this.props.person.message}<br/>

                        </div>
                    </div>
                
            </div>
        );
    };

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }
}

export default Card;