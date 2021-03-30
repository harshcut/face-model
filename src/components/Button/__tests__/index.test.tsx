import React from "react";
import { mount } from "enzyme";
import Button from "../index";

describe("Button", () => {
  it("should be defined", () => {
    expect(Button).toBeDefined();
  });

  it("should be rendered", () => {
    const wrapper = mount(<Button />);
    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("should support loading", () => {
    const wrapper = mount(<Button loading={true} />);
    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("should render children", () => {
    const wrapper = mount(<Button>Button</Button>);
    expect(wrapper.text()).toContain("Button");
  });

  it("should render different text", () => {
    const wrapper = mount(<Button>Text</Button>);
    expect(wrapper.text()).toContain("Text");

    wrapper.setProps({
      children: <span>文本</span>,
    });
    expect(wrapper.text()).toContain("文本");
  });

  it("should trigger callback function", () => {
    const WrapperButton = () => {
      const [state, setState] = React.useState<string>("state1");
      return <Button onClick={() => setState("state2")}>{state}</Button>;
    };
    const wrapper = mount(<WrapperButton />);
    expect(wrapper.text()).toContain("state1");

    wrapper.simulate("click");
    expect(wrapper.text()).toContain("state2");
  });

  it("should remove expired events", () => {
    const wrapper = mount(<Button>Event</Button>);
    wrapper.simulate("click");
    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("should match snapshot", () => {
    expect(<Button>Snapshot</Button>).toMatchSnapshot();
    expect(<Button loading={true} />).toMatchSnapshot();
  });
});
