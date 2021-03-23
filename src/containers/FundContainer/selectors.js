import { createSelector } from "reselect";

/**
 * Direct selector to the fundContainer state domain
 */

const selectFundContainerDomain = state => {
    return state.fundContainer;
};

/**
 * Other specific selectors
 */

/**
 * Default selector used by FundContainer
 */

const makeSelectFundContainer = () =>
    createSelector(selectFundContainerDomain, substate => substate.toJS());

export default makeSelectFundContainer;
export { selectFundContainerDomain };
