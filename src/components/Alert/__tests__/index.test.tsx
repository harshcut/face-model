import React from "react";
import { mount } from "enzyme";
import Alert from "../index";

describe("Alert", () => {
  it("should be defined", () => {
    expect(Alert).toBeDefined();
  });

  it("should be rendered", () => {
    const wrapper = mount(<Alert />);
    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("should render children", () => {
    const wrapper = mount(<Alert>Alert</Alert>);
    expect(wrapper.text()).toContain("Alert");
  });

  it("should render different styles", () => {
    const wrapper = mount(
      <div>
        <Alert type="neutral" />
        <Alert type="warning" />
        <Alert type="danger" />
      </div>
    );
    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("should render different text", () => {
    const wrapper = mount(<Alert>Text</Alert>);
    expect(wrapper.text()).toContain("Text");

    wrapper.setProps({
      children: <span>文本</span>,
    });
    expect(wrapper.text()).toContain("文本");
  });

  it("should match snapshot", () => {
    expect(<Alert type="neutral" />).toMatchSnapshot();
    expect(<Alert type="warning" />).toMatchSnapshot();
    expect(<Alert type="danger" />).toMatchSnapshot();
  });
});
