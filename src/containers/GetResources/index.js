/**
 *
 * GetResources
 *
 */

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import reducerRegistry from "../../store/reducerRegistry";
import sagaRegistry from "../../store/sagaRegistry";
import makeSelectGetResources from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import { loadOptions, searchFalcon, resetStatus } from "./actions";
import { SelectionGroupIds, AppStates } from "./constants";

import SelectorLayout from "../../components/falcone/SelectorLayout";

export class GetResources extends React.Component {
    render() {
        return (
            <SelectorLayout
                {...this.props.getresources}
                appStates={AppStates}
                resetStatus={this.props.resetStatus}
                selectionGroupIds={SelectionGroupIds}
                searchFalcon={this.props.searchFalcon}
            />
        );
    }

    componentDidMount() {
        this.props.loadOptions();
    }
}

GetResources.propTypes = {
    getResources: PropTypes.object,
    resetStatus: PropTypes.func,
    searchFalcon: PropTypes.func,
    loadOptions: PropTypes.func
};

const mapStateToProps = createStructuredSelector({
    getresources: makeSelectGetResources()
});

export function mapDispatchToProps(dispatch) {
    return {
        resetStatus: () => dispatch(resetStatus()),
        loadOptions: () => dispatch(loadOptions()),
        searchFalcon: payload => dispatch(searchFalcon(payload))
    };
}

reducerRegistry.register("getResources", reducer);
sagaRegistry.register("getResources", saga);

export default connect(mapStateToProps, mapDispatchToProps)(GetResources);
