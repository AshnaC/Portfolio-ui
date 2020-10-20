import React from "react";
import { mount } from "enzyme";
import { enzymeFind } from "styled-components/test-utils";

import SelectorPage from "./index";
import { SelectorWrapper } from "./styles";

describe("<SelectorPage />", () => {
  let props = {};
  let state = null;
  const selectorPage = props => {
    const wrapper = mount(<SelectorPage {...props} />);
    if (state) {
      wrapper.setState(state);
    }
    return wrapper;
  };

  beforeEach(() => {
    props = {
      selectionGroupIds: [{ id: 1 }, { id: 2 }],
      vehicles: [
        { name: "Space shuttle", total_no: 1, max_distance: 400, speed: 5 },
        { name: "Space ship", total_no: 2, max_distance: 600, speed: 10 }
      ],
      planets: [
        { name: "Donlon", distance: 100 },
        { name: "Enchai", distance: 200 }
      ]
    };
    state = null;
  });
  it("SelectorWrapper count is same as selectionGroupIds count", () => {
    const component = selectorPage(props);
    const selectorWrapper = enzymeFind(component, SelectorWrapper);
    expect(selectorWrapper.length).toBe(props.selectionGroupIds.length);
  });

  describe("when iternary is selected", () => {
    let component;
    beforeEach(() => {
      state = {
        selectionList: [
          {
            id: 1,
            selectedPlanet: { name: "Donlon", distance: 100 },
            selectedVehicle: {
              name: "Space ship",
              total_no: 2,
              max_distance: 600,
              speed: 10
            }
          }
        ],
        availableVehicles: [
          {
            name: "Space shuttle",
            total_no: 1,
            max_distance: 400,
            speed: 5
          },
          { name: "Space ship", total_no: 1, max_distance: 600, speed: 10 }
        ],
        availablePlanets: [{ name: "Enchai", distance: 200 }]
      };
      component = selectorPage(props, state);
    });
    describe("when a planet is slected", () => {
      beforeEach(() => {
        const selectedPlanet = { name: "Enchai", distance: 200 };
        component.instance().selectPlanet(1, state.selectionList[0])(
          selectedPlanet
        );
        component.update();
      });
      it("available Planets, old planet added, new removed", () => {
        const availablePlanets = component.state("availablePlanets");
        const availablePlanetsExpected = [{ name: "Donlon", distance: 100 }];
        expect(availablePlanets).toEqual(availablePlanetsExpected);
      });
      it("available vehicles, old vehicle replaced to inventory", () => {
        const availableVehicles = component.state("availableVehicles");
        const availableVehiclesExpected = [
          {
            name: "Space shuttle",
            total_no: 1,
            max_distance: 400,
            speed: 5
          },
          { name: "Space ship", total_no: 2, max_distance: 600, speed: 10 }
        ];
        expect(availableVehicles).toEqual(availableVehiclesExpected);
      });
      it("selection list updated to new details", () => {
        const selectionList = component.state("selectionList");
        const selectionListExpected = [
          {
            id: 1,
            selectedPlanet: { name: "Enchai", distance: 200 }
          }
        ];
        expect(selectionList).toEqual(selectionListExpected);
      });
    });
    describe("when a vehicle is selected", () => {
      beforeEach(() => {
        const selectedVehicle = {
          name: "Space shuttle",
          total_no: 1,
          max_distance: 400,
          speed: 5
        };
        component.instance().selectVehicle(state.selectionList[0])(
          selectedVehicle
        );
        component.update();
        it("available vehicle, replace if old vehicle exists", () => {
          const availableVehiclesExpected = [
            {
              name: "Space ship",
              total_no: 2,
              max_distance: 600,
              speed: 10
            }
          ];
          const availableVehicles = component.state("availableVehicles");
          expect(availableVehicles).toEqual(availableVehiclesExpected);
        });
        it("update selecti List with new vehicle", () => {
          const expected = [
            {
              id: 1,
              selectedPlanet: { name: "Donlon", distance: 100 },
              selectedVehicle: {
                name: "Space shuttle",
                total_no: 1,
                max_distance: 400,
                speed: 5
              }
            }
          ];
          const selectionList = component.state("selectionList");
          expect(selectionList).toEqual(expected);
        });
      });
    });
  });
});
