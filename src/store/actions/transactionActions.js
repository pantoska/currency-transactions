import * as actionTypes from "./actionTypes";

export function addTransaction(transaction) {
  return {
    type: actionTypes.ADD_TRANSACTION,
    payload: transaction
  };
}

export function removeTransaction(transactionId) {
  return {
    type: actionTypes.REMOVE_TRANSACTION,
    payload: transactionId
  };
}

export function changeRate(rate) {
  return {
    type: actionTypes.CHANGE_RATE,
    payload: rate
  };
}
