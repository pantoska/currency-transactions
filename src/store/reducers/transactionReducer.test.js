import transactionReducer from "./transactionReducer";
import {
  changeRate,
  addTransaction,
  removeTransaction
} from "../actions/transactionActions";

const initialState = {
  table: [
    { id: "1", name: "transakcja1", amountEUR: 500 },
    { id: "2", name: "transakcja2", amountEUR: 550 },
    { id: "3", name: "transakcja3", amountEUR: 2.33 }
  ],
  rate: ""
};

describe("transaction reducer", () => {
  it("should return the initial state", () => {
    expect(transactionReducer(undefined, {})).toEqual({
      table: [],
      rate: ""
    });
  });

  it("should change rate", () => {
    expect(transactionReducer(initialState, changeRate(5))).toEqual({
      table: [
        { id: "1", name: "transakcja1", amountEUR: 500 },
        { id: "2", name: "transakcja2", amountEUR: 550 },
        { id: "3", name: "transakcja3", amountEUR: 2.33 }
      ],
      rate: 5
    });
  });

  it("should add transaction", () => {
    expect(
      transactionReducer(
        initialState,
        addTransaction({ id: "4", name: "transakcja4", amountEUR: 2.33 })
      )
    ).toEqual({
      table: [
        { id: "1", name: "transakcja1", amountEUR: 500 },
        { id: "2", name: "transakcja2", amountEUR: 550 },
        { id: "3", name: "transakcja3", amountEUR: 2.33 },
        { id: "4", name: "transakcja4", amountEUR: 2.33 }
      ],
      rate: ""
    });
  });

  it("should remove transaction", () => {
    expect(transactionReducer(initialState, removeTransaction("3"))).toEqual({
      table: [
        { id: "1", name: "transakcja1", amountEUR: 500 },
        { id: "2", name: "transakcja2", amountEUR: 550 }
      ],
      rate: ""
    });
  });
});
