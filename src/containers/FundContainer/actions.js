/*
 *
 * FundContainer actions
 *
 */

import {
    GET_FUND_LIST,
    LOADING_FAILED,
    FUND_LIST_FETCHED,
    GET_FUND_DETAILS,
    FUND_DETAILS_FETCHED,
    GET_FUND_DETAILS_LIST
} from "./constants";

export function getFundList(param) {
    return {
        type: GET_FUND_LIST,
        param
    };
}

export function getFundDetails(key) {
    return {
        type: GET_FUND_DETAILS,
        key
    };
}

export function fundListFetched(fundList) {
    return {
        type: FUND_LIST_FETCHED,
        fundList
    };
}

export function fundDetailsFetched(details, loadCompare) {
    return {
        type: FUND_DETAILS_FETCHED,
        details,
        loadCompare
    };
}

export function getFundDetailsList(detailsIds) {
    return {
        type: GET_FUND_DETAILS_LIST,
        detailsIds
    };
}

export function loadingFailed(err) {
    return {
        type: LOADING_FAILED,
        err
    };
}
