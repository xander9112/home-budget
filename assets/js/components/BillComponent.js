import React, {Component} from 'react';
import * as BillActions from '../actions/BillActions';
import RaisedButton from 'material-ui/lib/raised-button';
import Remove from 'material-ui/lib/svg-icons/content/remove-circle-outline';

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
					<RaisedButton
						label=" "
						labelPosition="before"
						primary={true}
						icon={<Remove />}
						onClick={this.deleteBill.bind(this)}
					/>
				</td>
			</tr>
		);
	}
}
