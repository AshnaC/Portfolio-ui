/**
 *
 * FundContainer
 *
 */

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import reducerRegistry from "../../store/reducerRegistry";
import sagaRegistry from "../../store/sagaRegistry";
import makeSelectFundContainer from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import { getFundList, getFundDetails, getFundDetailsList } from "./actions";

import FundExplorer from "../../components/fund/FundExplorer";
import ErrorPage from "../../components/fund/ErrorPage";

export class FundContainer extends React.Component {
    render() {
        console.log(this.props);
        return this.props.error ? (
            <ErrorPage />
        ) : (
            <FundExplorer
                {...this.props.fundContainer}
                getFundList={this.props.getFundList}
                getFundDetails={this.props.getFundDetails}
                getFundDetailsList={this.props.getFundDetailsList}
            />
        );
    }
}

FundContainer.propTypes = {
    error: PropTypes.bool,
    fundList: PropTypes.object,
    loadCompare: PropTypes.bool,
    fundListFetched: PropTypes.bool,
    fecthingDetails: PropTypes.bool,
    fetchingFundList: PropTypes.bool,
    fundDetailsList: PropTypes.object,
    getFundDetailsList: PropTypes.func,
    getFundList: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
    fundContainer: makeSelectFundContainer()
});

function mapDispatchToProps(dispatch) {
    return {
        getFundList: param => dispatch(getFundList(param)),
        getFundDetails: detailsId => dispatch(getFundDetails(detailsId)),
        getFundDetailsList: detailsIds => dispatch(getFundDetailsList(detailsIds))
    };
}

reducerRegistry.register("fundContainer", reducer);
sagaRegistry.register("fundContainer", saga);

export default connect(mapStateToProps, mapDispatchToProps)(FundContainer);
