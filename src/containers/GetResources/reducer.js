/*
 *
 * GetResources reducer
 *
 */

import { fromJS } from "immutable";
import {
  LOAD_OPTIONS,
  SEARCH_FALCON,
  SET_ERROR,
  SEARCH_FALCON_FINISHED,
  OPTIONS_LOADED,
  RESET_STATUS,
  AppStates
} from "./constants";

const initialState = fromJS({});

function getResourcesReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_OPTIONS:
      return state.set("appState", AppStates.LOADING).set("loading", true);
    case SEARCH_FALCON:
      return state.set("loading", true);
    case OPTIONS_LOADED:
      const { planets, vehicles } = action.payload;
      return state
        .set("planets", planets)
        .set("vehicles", vehicles)
        .set("appState", AppStates.APPLOADED)
        .set("loading", false);
    case SET_ERROR:
      return state
        .set("error", true)
        .set("appState", AppStates.ERROR)
        .set("loading", false);
    case SEARCH_FALCON_FINISHED:
      return state
        .set("status", action.payload)
        .set("appState", AppStates.MISSION_OVER)
        .set("loading", false);
    case RESET_STATUS:
      return state.set("status", null).set("appState", AppStates.APPLOADED);
    default:
      return state;
  }
}

export default getResourcesReducer;
