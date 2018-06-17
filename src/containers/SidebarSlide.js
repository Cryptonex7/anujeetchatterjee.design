import React, { Component } from 'react'
import SideButton from '../components/Home/SideButton/SideButton';
import NavBar from '../components/Home/NavBar/NavBar';
import MainContainer from './MainContainer'
import Music from './Music';
import WebDesign from './WebDesign';
import { Sidebar, Segment, Menu} from 'semantic-ui-react'
// import '../css/semantic.css';
import '../css/Slider.css';
import '../css/App.css';
import '../css/svg.css';


class SidebarSlide extends Component {
	state = { 	visible: false,
				page: 'home'
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

	changePageHome = ()=> {
		this.setState({page: 'home'})
	}

	changePageMusic = ()=> {
		this.setState({page: 'music'})
	}
	
	changePageWeb = ()=> {
		this.setState({page: 'web'})
	}

	PAGE_STATES = {
		home: <MainContainer />,
		music: <Music />,
		web: <WebDesign />,
	};
	

	render() {              
		const { visible } = this.state
		
		return (

			<div>


				<NavBar home = {this.changePageHome} web = {this.changePageWeb} music = {this.changePageMusic}/>

				<Sidebar.Pushable as={Segment}>

					<Sidebar as={Menu} animation='slide along' width='thin' visible={visible} icon='labeled' vertical inverted>

						<Menu.Item name='home' onClick={this.changePageHome}>
							Home
						</Menu.Item>
						<Menu.Item name='web-design'onClick={this.changePageWeb}>
							Web Design
						</Menu.Item>
						<Menu.Item name='Music'onClick={this.changePageMusic}>
							Music
						</Menu.Item>

					</Sidebar>

					<Sidebar.Pusher>
						<Segment basic>
							<SideButton visibilityFunction= {this.toggleVisibility}/>
								{this.PAGE_STATES[this.state.page]}

								
							
							
						</Segment>
					</Sidebar.Pusher>
				</Sidebar.Pushable>
			</div>
		)
	}
}

export default SidebarSlide