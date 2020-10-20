import React from "react";
import { mount } from "enzyme";
import {
  loadOptions as loadOptionsAction,
  searchFalcon,
  resetStatus
} from "../actions";

import { GetResources, mapDispatchToProps } from "../index";
import SelectorLayout from "../../../components/SelectorLayout";

describe("<GetResources />", () => {
  let props;
  let loadOptions;
  const getResources = props => {
    const wrapper = mount(<GetResources {...props} />);
    return wrapper;
  };
  beforeEach(() => {
    loadOptions = jest.fn();
    props = { loadOptions };
  });
  it("SelectorLayout component is always mounted", () => {
    let component = getResources(props);
    const selectorLayout = component.find(SelectorLayout);
    expect(selectorLayout.length).not.toBe(0);
  });

  it("load options called on app mount", () => {
    props = { ...props, loadOptions };
    let component = getResources(props);
    expect(loadOptions).toHaveBeenCalled();
  });

  describe("mapDispatchToProps", () => {
    const dispatch = jest.fn();
    let result;
    beforeEach(() => {
      result = mapDispatchToProps(dispatch);
    });
    describe("onResetStatus", () => {
      it("should be injected", () => {
        expect(result.resetStatus).toBeDefined();
      });

      it("should dispatch resetStatus action when called", () => {
        result.resetStatus();
        expect(dispatch).toHaveBeenCalledWith(resetStatus());
      });
    });
    describe("loadOptions", () => {
      it("should be injected", () => {
        expect(result.loadOptions).toBeDefined();
      });

      it("should dispatch loadOptions action when called", () => {
        result.loadOptions();
        expect(dispatch).toHaveBeenCalledWith(loadOptionsAction());
      });
    });
    describe("searchFalcon", () => {
      it("should be injected", () => {
        expect(result.searchFalcon).toBeDefined();
      });

      it("should dispatch searchFalcon action when called", () => {
        const payload = { param: "test" };
        result.searchFalcon(payload);
        expect(dispatch).toHaveBeenCalledWith(searchFalcon(payload));
      });
    });
  });
});
