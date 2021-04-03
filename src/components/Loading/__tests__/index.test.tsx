import React from "react";
import { mount } from "enzyme";
import Loading from "../index";

describe("Loading", () => {
  it("should be defined", () => {
    expect(Loading).toBeDefined();
  });

  it("should be rendered", () => {
    const wrapper = mount(<Loading />);
    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("should render different types", () => {
    const wrapper = mount(
      <div>
        <Loading type="circular" />
        <Loading type="linear" />
      </div>
    );
    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("should match snapshot", () => {
    expect(<Loading type="circular" />).toMatchSnapshot();
    expect(<Loading type="linear" />).toMatchSnapshot();
  });
});
