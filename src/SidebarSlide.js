import React, { Component } from 'react'
import BackgroundLogo from './BackgroundLogo';
import AboutBar from './AboutBar';
import IntroBar from './IntroBar';
import ThemeChanger from './ThemeChanger';
import SideButton from './SideButton';
import NavBar from './NavBar';
import MainContainer from './MainContainer'
import { Sidebar, Segment, Menu, Icon } from 'semantic-ui-react'
import './semantic.css';
import './App.css';
import './svg.css';


class SidebarSlide extends Component {
	state = { visible: false }
	
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
		return (

			<div>

				<SideButton visibilityFunction= {this.toggleVisibility}/>

				<NavBar/>

				<Sidebar.Pushable as={Segment}>

					<Sidebar as={Menu} animation='slide along' width='thin' visible={visible} icon='labeled' vertical inverted>

						<Menu.Item name='home'>
							<Icon name='home' />
							Home
						</Menu.Item>
						<Menu.Item name='web-design'>
							<Icon name='web-design' />
							Web Design
						</Menu.Item>
						<Menu.Item name='Music'>
							<Icon name='Music' />
							Music
						</Menu.Item>

					</Sidebar>

					<Sidebar.Pusher>
						<Segment basic>
							
							<MainContainer/>
							
						</Segment>
					</Sidebar.Pusher>
				</Sidebar.Pushable>
			</div>
		)
	}
}

export default SidebarSlide