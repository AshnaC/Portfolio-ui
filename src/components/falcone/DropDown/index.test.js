import React from "react";
import { mount } from "enzyme";
import { enzymeFind } from "styled-components/test-utils";

import DropDown from "./index";
import { Options, Selector } from "./styles";

describe("<DropDown />", () => {
  let props = {};
  let state = null;
  const dropDown = props => {
    const wrapper = mount(<DropDown {...props} />);
    if (state) {
      wrapper.setState(state);
    }
    return wrapper;
  };

  beforeEach(() => {
    props = {};
    state = null;
  });

  describe("options recieved as props", () => {
    let component;
    let options;
    let selectItem;
    beforeEach(() => {
      selectItem = jest.fn();
      props = {
        ...props,
        options: [
          { name: "test", value: "test" },
          { name: "test_1", value: "test_1" }
        ],
        selectItem
      };
      state = { showDropDown: true };
      component = dropDown(props, state);
      options = enzymeFind(component, Options);
    });
    it("options div  counts options props counts ", () => {
      expect(options.length).toBe(props.options.length);
    });
    it("select function called every time option is clicked", () => {
      options.map(item => item.simulate("click", { preventDefault() {} }));
      expect(selectItem.mock.calls.length).toBe(props.options.length);
    });
  });

  it("selector click toogles show dropdown state", () => {
    state = { showDropDown: true };
    const component = dropDown(props, state);
    const selector = enzymeFind(component, Selector);
    selector.simulate("click");
    component.update();
    const showDropDown = component.state("showDropDown");
    expect(showDropDown).toBe(!state.showDropDown);
  });
});
