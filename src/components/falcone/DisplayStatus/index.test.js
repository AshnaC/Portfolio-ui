import React from "react";
import { mount } from "enzyme";
import { enzymeFind } from "styled-components/test-utils";

import DisplayStatus from "./index";
import { StatusMessage, MissionDetails, Button } from "./styles";

describe("<DisplayStatus />", () => {
  let props = {};
  const displayStatus = props => {
    return mount(<DisplayStatus {...props} />);
  };

  beforeEach(() => {
    props = {};
  });

  it("Status Message div always present", () => {
    const component = displayStatus(props);
    const statusMessage = enzymeFind(component, StatusMessage);
    expect(statusMessage.length).toBe(1);
  });

  it("when status props is defined as success, mission details are listed", () => {
    props = { ...props, status: "success" };
    const component = displayStatus(props);
    const missionDetails = enzymeFind(component, MissionDetails);
    expect(missionDetails.length).not.toBe(0);
  });

  describe("Reset button", () => {
    let component;
    let button;
    const resetStatus = jest.fn();
    beforeEach(() => {
      props = { ...props, resetStatus };
      component = displayStatus(props);
      button = enzymeFind(component, Button);
    });
    it("always present", () => {
      expect(button.length).toBe(1);
    });
    it("Button click triggers reset metHod", () => {
      button.simulate("click");
      expect(resetStatus.mock.calls.length).toBe(1);
    });
  });
});
