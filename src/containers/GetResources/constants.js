/*
 *
 * GetResources constants
 *
 */

import sigil_1 from "./images/sigil_1.jpeg";
import sigil_2 from "./images/sigil_2.jpg";
import sigil_3 from "./images/sigil_3.jpg";
import sigil_4 from "./images/sigil_4.jpg";
import sigil_5 from "./images/sigil_5.png";
import sigil_6 from "./images/sigil_6.jpg";

export const LOAD_OPTIONS = "app/GetResources/LOAD_OPTIONS";
export const SEARCH_FALCON = "app/GetResources/SEARCH_FALCON";
export const SET_ERROR = "app/GetResources/SET_ERROR";
export const OPTIONS_LOADED = "app/GetResources/OPTIONS_LOADED";
export const RESET_STATUS = "app/GetResources/RESET_STATUS";
export const SEARCH_FALCON_FINISHED = "app/GetResources/SEARCH_FALCON_FINISHED";

export const SelectionGroupIds = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
export const AppStates = {
    LOADING: 1,
    APPLOADED: 2,
    ERROR: 3,
    MISSION_OVER: 4
};

export const planetSigils = [sigil_1, sigil_2, sigil_3, sigil_4, sigil_5, sigil_6];
