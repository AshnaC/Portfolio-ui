/*
 *
 * GetResources actions
 *
 */

import {
  LOAD_OPTIONS,
  SEARCH_FALCON,
  SET_ERROR,
  SEARCH_FALCON_FINISHED,
  OPTIONS_LOADED,
  RESET_STATUS
} from "./constants";

export function loadOptions() {
  return {
    type: LOAD_OPTIONS
  };
}

export function optionsLoaded(payload) {
  return {
    type: OPTIONS_LOADED,
    payload
  };
}

export function searchFalcon(payload) {
  return {
    type: SEARCH_FALCON,
    payload
  };
}

export function searchFalconFinished(payload) {
  return {
    type: SEARCH_FALCON_FINISHED,
    payload
  };
}

export function setError() {
  return {
    type: SET_ERROR
  };
}

export function resetStatus() {
  return {
    type: RESET_STATUS
  };
}
