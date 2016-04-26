import {EventEmitter} from "events";

import dispatcher from "../dispatcher";

class BillStore extends EventEmitter {
	constructor () {
		super();

		this.bills = Lockr.get('bills') || [];

		/*this.articles = [
		 {
		 id:    1456464247256,
		 title: "Хлеб",
		 price: '25',
		 date:  '26.05.2016'
		 },
		 {
		 id:    1461313147256,
		 title: "Хлеб",
		 price: '27',
		 date:  '25.05.2016'
		 },
		 {
		 id:    1461565464656,
		 title: "Масло",
		 price: '200',
		 date:  '25.05.2016'
		 },
		 {
		 id:    1461599647896,
		 title: "Соль",
		 price: '250',
		 date:  '26.05.2016'
		 }
		 ];

		 Lockr.set('bills', this.articles);*/
	}

	createBill (data) {

		this.bills.push(data);

		Lockr.set('bills', this.bills);

		this.emit('change');
	}

	deleteBill (id) {
		_.each(this.bills, (bill, index) => {
			if (!_.isUndefined(bill)) {
				if (bill.id === id) {
					this.bills.splice(index, 1);
				}
			}
		});

		Lockr.set('bills', this.bills);
		this.emit('change');
	}


	findAll () {
		return this.bills;
	}

	findById (id) {
		return _.find(this.bills, { id: parseInt(id) });
	}

	handleActions (action) {
		switch (action.type) {
			case "CREATE_BILL" :
			{
				this.createBill(action.bill);
			}
			case "DELETE_BILL" :
			{
				this.deleteBill(action.id);
			}
		}
	}
}


const billStore = new BillStore;

dispatcher.register(billStore.handleActions.bind(billStore));

export default billStore;
