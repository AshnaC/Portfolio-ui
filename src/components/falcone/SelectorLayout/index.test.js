import React from "react";
import { mount } from "enzyme";
import { enzymeFind } from "styled-components/test-utils";

import SelectorLayout from "./index";
import SelectorPage from "../SelectorPage";
import LoadingIndicator from "../LoadingIndicator";
import ErrorPage from "../ErrorPage";
import DisplayStatus from "../DisplayStatus";
import LoadingPage from "../LoadingPage";

import { AppStates } from "../../containers/GetResources/constants";

import { ContentWrapper } from "./styles";

describe("<SelectorLayout />", () => {
  let props = { appStates: AppStates };
  const selectorLayout = props => {
    return mount(<SelectorLayout {...props} />);
  };

  beforeEach(() => {
    props = { appStates: AppStates };
  });

  it("always render contenwrapper div", () => {
    const component = selectorLayout(props);
    const wrapper = enzymeFind(component, ContentWrapper);
    expect(wrapper.length).toBe(1);
  });

  it("Loading indicator is mounted when props loading is true", () => {
    props = { ...props, loading: true };
    const component = selectorLayout(props);
    const loadingIndicator = component.find(LoadingIndicator);
    expect(loadingIndicator.length).not.toBe(0);
  });

  describe("changing app states", () => {
    it("app is Loading", () => {
      props = { ...props, appState: AppStates.LOADING };
      const component = selectorLayout(props);
      const loadingPage = component.find(LoadingPage);
      expect(loadingPage.length).toBe(1);
    });
    it("app is loaded", () => {
      props = {
        ...props,
        appState: AppStates.APPLOADED,
        selectionGroupIds: []
      };
      const component = selectorLayout(props);
      const selectorPage = component.find(SelectorPage);
      expect(selectorPage.length).toBe(1);
    });
    it("Mission over", () => {
      props = { ...props, appState: AppStates.MISSION_OVER };
      const component = selectorLayout(props);
      const displayStatus = component.find(DisplayStatus);
      expect(displayStatus.length).toBe(1);
    });
    it("Error encountered", () => {
      props = { ...props, appState: AppStates.ERROR };
      const component = selectorLayout(props);
      const errorPage = component.find(ErrorPage);
      expect(errorPage.length).toBe(1);
    });
  });
});
