import React from "react";
import '../styles/navigation.css';

export default class Navigation extends React.Component {

	render(){

		return(
			<div class="navigation">
				<ul>
					<li class="nav-item"><a href="#">About</a></li>
					<li class="nav-item"><a href="#">Projects</a></li>
					<li class="nav-item"><a href="#">Links</a></li>
					<li class="nav-item"><a href="#">Contact</a></li>
				</ul>
			</div>
		);
	}
}
