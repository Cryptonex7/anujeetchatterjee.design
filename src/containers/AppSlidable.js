import React, { Component } from 'react'
import Router from '../Router'
import { NavLink } from 'react-router-dom'
import { HOME, WEB, MUSIC } from "../constants";

import SideButton from '../components/Home/SideButton/SideButton';
import NavBar from '../components/Home/NavBar/NavBar';
import { Sidebar, Segment, Menu} from 'semantic-ui-react'
// import '../css/semantic.css';
import '../css/Slider.css';
import '../css/App.css';
import '../css/svg.css';

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
		const { page, onPageChange } = this.props;
		return (
			<div>
				<NavBar navPage = {onPageChange}/>
				<Sidebar.Pushable as={Segment}>
					<Sidebar as={Menu} animation='slide along' width='thin' visible={visible} icon='labeled' vertical inverted>
					<NavLink to='/home' id={HOME} onClick={()=> onPageChange(HOME)}>
								Home
						</NavLink>
						<NavLink to='/web'  id={WEB} onClick={()=> onPageChange(WEB)}>
								Web Design
						</NavLink>
						<NavLink to='/music' id={MUSIC} onClick={()=> onPageChange(MUSIC)}>
								Music
						</NavLink>
					</Sidebar>
					<Sidebar.Pusher>
						<Segment basic>
							<SideButton visibilityFunction= {this.toggleVisibility}/>
								<Router page = {page}/>
						</Segment>
					</Sidebar.Pusher>
				</Sidebar.Pushable>
			</div>
		)
	}
}

export default AppSlidable