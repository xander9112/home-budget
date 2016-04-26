import React, {Component} from 'react';
import * as BillActions from '../actions/BillActions';

export default class BillComponent extends Component {
	constructor (props) {
		super(props);
	}

	deleteBill () {
		BillActions.deleteBill(this.props.id);
	}

	render () {
		return (
			<tr>
				<td>{this.props.id}</td>
				<td>{this.props.title}</td>
				<td>{this.props.price}</td>
				<td>{this.props.date}</td>
				<td>
					<button onClick={this.deleteBill.bind(this)}>
						<span className="glyphicon glyphicon-remove"></span>
					</button>
				</td>
			</tr>
		);
	}
}
