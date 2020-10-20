import React from "react";
import { mount } from "enzyme";
import { enzymeFind } from "styled-components/test-utils";

import RadioButtonList from "./index";
import { ItemWrapper, RadioButton } from "./styles";

describe("<RadioButtonList />", () => {
  let props = {};
  const radioButtonList = props => {
    return mount(<RadioButtonList {...props} />);
  };

  beforeEach(() => {
    props = {};
  });

  describe("when options recieved as props", () => {
    let component = radioButtonList(props);
    let itemWrapper = enzymeFind(component, ItemWrapper);
    beforeEach(() => {
      props = {
        ...props,
        options: [
          { name: "test", enabled: true, total_no: 3 },
          { name: "test_1 ", enabled: false, total_no: 3 }
        ]
      };
      component = radioButtonList(props);
      itemWrapper = enzymeFind(component, ItemWrapper);
    });
    it("item wrapper count same as options count", () => {
      expect(itemWrapper.length).toBe(props.options.length);
    });
    describe("when option is enabled", () => {
      let radioButtons;
      beforeEach(() => {
        radioButtons = enzymeFind(component, RadioButton);
      });
      it("onclick event attached to RadioButton", () => {
        const enableOptions = radioButtons.map(node =>
          node.prop("onClick") ? true : false
        );
        const enabledProps = props.options.map(item => item.enabled);
        expect(enableOptions).toEqual(enabledProps);
      });
    });
  });
});
