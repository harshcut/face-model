import React from "react";
import { mount } from "enzyme";
import CheckBox from "../index";

describe("CheckBox", () => {
  it("should be defined", () => {
    expect(CheckBox).toBeDefined();
  });

  it("should be rendered", () => {
    const wrapper = mount(<CheckBox />);
    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("should render children", () => {
    const wrapper = mount(<CheckBox>CheckBox</CheckBox>);
    expect(wrapper.text()).toContain("CheckBox");
  });

  it("should render different text", () => {
    const wrapper = mount(<CheckBox>Text</CheckBox>);
    expect(wrapper.text()).toContain("Text");

    wrapper.setProps({
      children: <span>文本</span>,
    });
    expect(wrapper.text()).toContain("文本");
  });

  it("should forward ref by default", () => {
    const ref = React.createRef<HTMLInputElement>();
    const wrapper = mount(<CheckBox ref={ref} />);
    expect(ref.current).not.toBeNull();
    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("should get checked value", () => {
    const wrapper = mount(<CheckBox defaultChecked={true}>Checked</CheckBox>);
    const input = wrapper.find("input").getDOMNode();
    expect((input as HTMLInputElement).checked).toBeTruthy();
  });

  it("should change checked value", () => {
    const ref = React.createRef<HTMLInputElement>();
    const wrapper = mount(<CheckBox ref={ref} />);
    expect(ref.current?.checked).toBe(false);
    wrapper.find("input").getDOMNode<HTMLInputElement>().checked = true;
    wrapper.find("input").simulate("change");
    expect(ref.current?.checked).toBe(true);
    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("should match snapshot", () => {
    expect(<CheckBox>CheckBox</CheckBox>).toMatchSnapshot();
    expect(
      <CheckBox defaultChecked={true}>CheckBox</CheckBox>
    ).toMatchSnapshot();
  });
});
