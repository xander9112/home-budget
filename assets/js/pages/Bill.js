import React, {Component} from 'react';

import DatePicker from 'material-ui/lib/date-picker/date-picker';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import ContentSave from 'material-ui/lib/svg-icons/content/save';

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

	keyDownPrice (e) {
		let { value } = e.target;
		e.target.value = value.replace(/\D/, '');
	}

	render () {
		const { bills } = this.state;

		const BillComponents = bills.map((bill) => {
			return <BillComponent key={bill.id} {...bill}/>;
		});

		const style = {
			marginTop: '24px'
		};

		return (
			<div>
				<div className="page-header">
					<h1>Мои счета</h1>
				</div>
				<div className="row">
					<div className="col-xs-12">
						<table className="responsive-table">
							<thead>
							<tr>
								<th data-field="id">#</th>
								<th data-field="title">Название</th>
								<th data-field="price">Цена</th>
								<th data-field="date">Дата</th>
								<th><i className="material-icons">delete</i></th>
							</tr>
							</thead>
							<tbody>
							{BillComponents}
							<tr>
								<td></td>
								<td>
									<div className="row">
										<div className="input-field col s12">
											<TextField
												hintText="Название"
												floatingLabelText="Название"
											/>
										</div>
									</div>
								</td>
								<td>
									<div className="row">
										<div className="input-field col s12">
											<TextField
												hintText="Цена"
												floatingLabelText="Цена"
												onChange={this.keyDownPrice.bind(this)}
											/>
										</div>
									</div>
								</td>
								<td>
									<div className="row">
										<div className="input-field col s6">
											<DatePicker hintText="Выберите дату"
											            mode="landscape"
											            container="dialog"
											            firstDayOfWeek={1}
											            maxDate={new Date()}
											            autoOk={true}
											            style={style}
											/>
										</div>
									</div>
								</td>
							</tr>
							<tr>
								<td></td>
								<td></td>
								<td></td>
								<td colSpan="2">
									<div className="input-field col s12 right-align">
										<RaisedButton
											label="Сохранить"
											labelPosition="before"
											primary={true}
											icon={<ContentSave />}
											onClick={this.saveBill.bind(this)}
										/>
									</div>
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
