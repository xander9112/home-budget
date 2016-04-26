import dispatcher from "../dispatcher";

export function createBill (bill) {
	"use strict";
	dispatcher.dispatch({
		type: 'CREATE_BILL',
		      bill
	});
}

export function deleteBill (id) {
	"use strict";
	dispatcher.dispatch({
		type: 'DELETE_BILL',
		      id,
	});
}
