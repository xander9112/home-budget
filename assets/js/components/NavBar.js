import React, {Component} from 'react';
import {Link} from "react-router";
import {IndexLink} from "react-router";

export default class NavBar extends Component {
	constructor (props) {
		super(props);

		this.state = {
			collapsed: true
		};
	}

	toogleCollapse () {
		const collapsed = !this.state.collapsed;
		this.setState({ collapsed });
	}

	render () {
		const { route } = this.props;
		const { location } = route;
		const { collapsed } = this.state;

		const IndexClass = location.pathname === '/' ? "active" : '';
		const BlogClass = location.pathname.match(/^\/blog/) ? 'active' : '';
		const BillClass = location.pathname.match(/^\/bill/) ? 'active' : '';

		const navClass = collapsed ? "collapse" : '';

		return (
			<nav className="navbar navbar-default navbar-fixed-top">
				<div className="container">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle" onClick={this.toogleCollapse.bind(this)}>
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<Link to="/" className="navbar-brand">Мой блог</Link>
					</div>
					<div id="navbar" className={"navbar-collapse " + navClass}>
						<ul className="nav navbar-nav">
							<li className={IndexClass}>
								<IndexLink to="/" onClick={this.toogleCollapse.bind(this)}>Главная</IndexLink>
							</li>
							<li className={BillClass}>
								<Link to="bill" onClick={this.toogleCollapse.bind(this)}>Мои финансы</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}
