import React, {Component} from 'react';
import NavBar from "./components/NavBar";

export default class App extends Component {
	constructor (props) {
		super(props);
	}

	render () {
		return (
			<div className="p-page">
				<NavBar route={this.props}/>
				<div className="container">
					{this.props.children}
				</div>
				<footer className="footer">
					<div className="container">
						<p className="text-muted">Place sticky footer content here.</p>
					</div>
				</footer>
			</div>
		);
	}
}
