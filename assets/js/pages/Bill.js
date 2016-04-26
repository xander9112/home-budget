import React, {Component} from 'react';

import BillComponent from '../components/BillComponent';
import BillStore from '../components/BillStore';
import * as BillActions from '../actions/BillActions';

export default class Bill extends Component {
	constructor (props) {
		super(props);

		this.getBills = this.getBills.bind(this);

		this.state = {
			bills: BillStore.findAll()
		}
	}

	componentWillMount () {
		BillStore.on('change', this.getBills);
	}

	componentWillUnmount () {
		BillStore.removeListener('change', this.getBills);
	}

	getBills () {
		this.setState({
			bills: BillStore.findAll()
		})
	}

	saveBill () {
		const data = {};

		_.each(this.refs, (value, key) => {
			data[ key ] = value.value;

			value.value = '';
		});

		data.id = +new Date();

		BillActions.createBill(data);
	}

	render () {
		const { bills } = this.state;

		const BillComponents = bills.map((bill) => {
			return <BillComponent key={bill.id} {...bill}/>;
		});

		return (
			<div>
				<div className="page-header">
					<h1>Мои счета</h1>
				</div>
				<div className="row">
					<div className="col-xs-12">
						<table className="table table-bordered">
							<thead>
							<tr>
								<th>#</th>
								<th>Название</th>
								<th>Цена</th>
								<th>Дата</th>
								<th><span className="glyphicon glyphicon-remove"></span></th>
							</tr>
							</thead>
							<tbody>
							{BillComponents}
							<tr>
								<td></td>
								<td>
									<input type="text" ref="title"/>
								</td>
								<td>
									<input type="text" ref="price"/>
								</td>
								<td>
									<input type="text" ref="date"/>
									<button onClick={this.saveBill.bind(this)}>Сохранить</button>
								</td>
							</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		);
	}
}
