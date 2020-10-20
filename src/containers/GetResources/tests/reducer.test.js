import { fromJS } from "immutable";

import getResourceReducer from "../reducer";
import {
  optionsLoaded,
  searchFalconFinished,
  setError,
  loadOptions,
  searchFalcon,
  resetStatus
} from "../actions";
import { AppStates } from "../constants";

describe("getResourceReducer", () => {
  let state;
  beforeEach(() => {
    state = fromJS({});
  });
  it("should return initial state on no action", () => {
    const expectedResult = state;
    expect(getResourceReducer(undefined, {})).toEqual(expectedResult);
  });
  it("loadOptions handled correctly", () => {
    const expectedResult = state
      .set("appState", AppStates.LOADING)
      .set("loading", true);
    expect(getResourceReducer(state, loadOptions())).toEqual(expectedResult);
  });
  it("searchFalcon handled correctly", () => {
    const expectedResult = state.set("loading", true);
    expect(getResourceReducer(state, searchFalcon())).toEqual(expectedResult);
  });
  it("optionsLoaded handled correctly", () => {
    const planets = ["A", "B", "C"];
    const vehicles = ["p", "q", "r"];
    const payload = { planets, vehicles };
    const expectedResult = state
      .set("planets", planets)
      .set("vehicles", vehicles)
      .set("appState", AppStates.APPLOADED)
      .set("loading", false);
    expect(getResourceReducer(state, optionsLoaded(payload))).toEqual(
      expectedResult
    );
  });
  it("setError handled correctly", () => {
    const expectedResult = state
      .set("error", true)
      .set("appState", AppStates.ERROR)
      .set("loading", false);
    expect(getResourceReducer(state, setError())).toEqual(expectedResult);
  });
  it("searchFalconFinished handled correctly", () => {
    const payload = { planet: "Reid" };
    const expectedResult = state
      .set("status", payload)
      .set("appState", AppStates.MISSION_OVER)
      .set("loading", false);
    expect(getResourceReducer(state, searchFalconFinished(payload))).toEqual(
      expectedResult
    );
  });
  it("resetStatus handled correctly", () => {
    const expectedResult = state
      .set("status", null)
      .set("appState", AppStates.APPLOADED);
    expect(getResourceReducer(state, resetStatus())).toEqual(expectedResult);
  });
});
