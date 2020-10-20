import {
  LOAD_OPTIONS,
  SEARCH_FALCON,
  SET_ERROR,
  SEARCH_FALCON_FINISHED,
  OPTIONS_LOADED,
  RESET_STATUS
} from "../constants";

import {
  optionsLoaded,
  loadOptions,
  searchFalcon,
  searchFalconFinished,
  setError,
  resetStatus
} from "../actions";

describe("Get Resources action", () => {
  describe("optionsLoaded", () => {
    it("return correct type and payload", () => {
      const payload = { name: "Ashna" };
      const expectedResult = {
        type: OPTIONS_LOADED,
        payload
      };
      expect(optionsLoaded(payload)).toEqual(expectedResult);
    });
  });
  describe("loadOptions", () => {
    it("return correct type", () => {
      const expectedResult = {
        type: LOAD_OPTIONS
      };
      expect(loadOptions()).toEqual(expectedResult);
    });
  });
  describe("searchFalcon", () => {
    it("return correct type and payload", () => {
      const payload = { name: "Bee" };
      const expectedResult = {
        type: SEARCH_FALCON,
        payload
      };
      expect(searchFalcon(payload)).toEqual(expectedResult);
    });
  });
  describe("searchFalconFinished", () => {
    it("return correct type and payload", () => {
      const payload = { name: "Bee-Hive" };
      const expectedResult = {
        type: SEARCH_FALCON_FINISHED,
        payload
      };
      expect(searchFalconFinished(payload)).toEqual(expectedResult);
    });
  });
  describe("setError", () => {
    it("return correct type ", () => {
      const expectedResult = {
        type: SET_ERROR
      };
      expect(setError()).toEqual(expectedResult);
    });
  });
  describe("resetStatus", () => {
    it("return correct type ", () => {
      const expectedResult = {
        type: RESET_STATUS
      };
      expect(resetStatus()).toEqual(expectedResult);
    });
  });
});
