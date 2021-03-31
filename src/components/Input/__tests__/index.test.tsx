import React from "react";
import { mount } from "enzyme";
import Input from "../index";

describe("Input", () => {
  it("should be defined", () => {
    expect(Input).toBeDefined();
  });

  it("should be rendered", () => {
    const wrapper = mount(<Input />);
    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("should forward ref by default", () => {
    const ref = React.createRef<HTMLInputElement>();
    const wrapper = mount(<Input ref={ref} />);
    expect(ref.current).not.toBeNull();
    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("should display placeholder", () => {
    const ref = React.createRef<HTMLInputElement>();
    const wrapper = mount(<Input placeholder="text" ref={ref} />);
    expect(ref.current?.placeholder).toBe("text");
    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("should get current value", () => {
    const ref = React.createRef<HTMLInputElement>();
    const wrapper = mount(<Input ref={ref} />);
    expect(ref.current?.value).toBe("");
    wrapper.find("input").getDOMNode<HTMLInputElement>().value = "text";
    wrapper.find("input").simulate("change");
    expect(ref.current?.value).toBe("text");
    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("should match snapshot", () => {
    expect(<Input placeholder="Input" />).toMatchSnapshot();
  });
});
