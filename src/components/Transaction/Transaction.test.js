import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Transaction from "./Transaction";
import CustomButton from "../CustomButton/CustomButton";

configure({ adapter: new Adapter() });

describe("<Transaction />", () => {
  it("should render <CustomButton /> element if is set displayButton", () => {
    const wrapper = shallow(
      <Transaction
        displayButton={true}
        transaction={{ id: 1, name: "transaction1", amountEUR: 5 }}
      />
    );
    expect(wrapper.find(CustomButton)).toHaveLength(1);
  });

  it("should not render <CustomButton /> element if is not set displayButton", () => {
    const wrapper = shallow(
      <Transaction
        displayButton={false}
        transaction={{ id: 1, name: "transaction1", amountEUR: 5 }}
      />
    );
    expect(wrapper.find(CustomButton)).toHaveLength(0);
  });
});
