import React, { Component } from 'react'
import Router from '../Router'
import { NavLink } from 'react-router-dom'
import { ROOT, WEB, MUSIC } from "../constants";

import SideButton from '../components/Home/SideButton/SideButton';
import NavBarResp from '../components/Home/NavBar/NavBarResp';
import { Sidebar, Segment, Menu} from 'semantic-ui-react'
import '../css/Slider.css';
import '../css/App.css';

class AppSlidable extends Component {
	state = { 	visible: false,
	}
	
	rotations =() => {
		let x= document.getElementById("baricon-1");
		x.classList.toggle("rotate-1");
		x.classList.toggle("bar-1");

		let y= document.getElementById("baricon-2");
		y.classList.toggle("rotate-2");
		y.classList.toggle("bar-2");
	}

	toggleVisibility = () => {
		this.setState({ visible: !this.state.visible })
		this.rotations();
	}

	render() {
		const { visible } = this.state
		const { onPageChange } = this.props;
		return (
			<div>
				<NavBarResp navPage = {onPageChange}/>
				<Sidebar.Pushable as={Segment}>
					<Sidebar as={Menu} animation='slide along' width='thin' visible={visible} icon='labeled' vertical inverted>
					<NavLink exact to='/anujeetchatterjee.design/' id={ROOT} className = 'tabs' onClick={()=> onPageChange(ROOT)}>
							<div>	Home</div>
						</NavLink>
						<NavLink to='/anujeetchatterjee.design/web'  id={WEB} className = 'tabs' onClick={()=> onPageChange(WEB)}>
							<div>	Web Design</div>
						</NavLink>
						<NavLink to='/anujeetchatterjee.design/music' id={MUSIC} className = 'tabs' onClick={()=> onPageChange(MUSIC)}>
							<div>Music</div>
						</NavLink>
					</Sidebar>
					<Sidebar.Pusher>
						<Segment basic>
							<SideButton visibilityFunction= {this.toggleVisibility}/>
								<Router/>
						</Segment>
					</Sidebar.Pusher>
				</Sidebar.Pushable>
			</div>
		)
	}
}

export default AppSlidable