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
			<nav>
				<div className="nav-wrapper">
					<Link to="/" className="navbar-brand">Мой блог</Link>
					<a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
					<ul className="right hide-on-med-and-down">
						<li className={IndexClass}>
							<IndexLink to="/" onClick={this.toogleCollapse.bind(this)}>Главная</IndexLink>
						</li>
						<li className={BillClass}>
							<Link to="bill" onClick={this.toogleCollapse.bind(this)}>Мои финансы</Link>
						</li>
					</ul>
					<ul className="side-nav" id="mobile-demo">
						<li className={IndexClass}>
							<IndexLink to="/" onClick={this.toogleCollapse.bind(this)}>Главная</IndexLink>
						</li>
						<li className={BillClass}>
							<Link to="bill" onClick={this.toogleCollapse.bind(this)}>Мои финансы</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
