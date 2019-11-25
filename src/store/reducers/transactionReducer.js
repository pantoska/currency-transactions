import * as actionTypes from "../actions/actionTypes";

const initialState = {
  table: [],
  rate: ""
};

const addTransaction = (state, action) => {
  return {
    ...state,
    table: [...state.table, action.payload]
  };
};

const removeTransaction = (state, action) => {
  return {
    ...state,
    table: state.table.filter(transaction => transaction.id !== action.payload)
  };
};

const changeRate = (state, action) => {
  return {
    ...state,
    rate: action.payload
  };
};

export default function transactionReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_TRANSACTION:
      return addTransaction(state, action);

    case actionTypes.REMOVE_TRANSACTION:
      return removeTransaction(state, action);

    case actionTypes.CHANGE_RATE:
      return changeRate(state, action);

    default:
      return state;
  }
}
