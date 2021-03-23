/*
 *
 * FundContainer reducer
 *
 */

import { fromJS } from "immutable";
import {
    GET_FUND_LIST,
    LOADING_FAILED,
    GET_FUND_DETAILS,
    FUND_LIST_FETCHED,
    FUND_DETAILS_FETCHED,
    GET_FUND_DETAILS_LIST
} from "./constants";

const initialState = fromJS({});

function fundContainerReducer(state = initialState, action) {
    switch (action.type) {
        case GET_FUND_LIST:
            return state.set("fundListFetched", false).set("fetchingFundList", true);
        case LOADING_FAILED:
            return state.set("error", true);
        case FUND_LIST_FETCHED:
            return state
                .set("fundList", action.fundList.data)
                .set("fetchingFundList", false)
                .set("fundListFetched", true);
        case FUND_DETAILS_FETCHED: {
            const { details } = action;
            let fundDetailsList = state.get("fundDetailsList");
            fundDetailsList = { ...fundDetailsList, ...details };
            return state
                .set("fundDetailsList", fundDetailsList)
                .set("fecthingDetails", false)
                .set("loadCompare", action.loadCompare);
        }
        case GET_FUND_DETAILS:
            return state.set("fecthingDetails", true);
        case GET_FUND_DETAILS_LIST:
            return state.set("fecthingDetails", true).set("loadCompare", false);
        default:
            return state;
    }
}

export default fundContainerReducer;
