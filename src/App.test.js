import React from "react";
import App from "./App";
import { shallow } from "enzyme";

describe("App component tests", () => {
  const wrapper = shallow(<App />);
 
  it("should have a Navbar component", () => {
    expect(wrapper.find("Navbar")).toHaveLength(1);
  });
  
});
