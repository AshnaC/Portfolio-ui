import React from "react";
import PropTypes from "prop-types";

import {
  Loader,
  ContentWrapper,
  Header,
  Heading,
  HeaderItem,
  SubHeader
} from "./styles";

import SelectorPage from "../SelectorPage";
import LoadingIndicator from "../LoadingIndicator";
import ErrorPage from "../ErrorPage";
import DisplayStatus from "../DisplayStatus";
import LoadingPage from "../LoadingPage";

class SelectorLayout extends React.PureComponent {
  state = {};
  render() {
    const {
      vehicles,
      planets,
      appState,
      selectionGroupIds,
      appStates,
      resetStatus,
      status,
      loading
    } = this.props;
    let content = "";
    let showHeader = true;
    switch (appState) {
      case appStates.LOADING:
        content = <LoadingPage />;
        break;
      case appStates.APPLOADED:
        content = (
          <SelectorPage
            planets={planets}
            vehicles={vehicles}
            reset={this.state.reset}
            searchFalcon={this.searchFalcon}
            clearResetFlag={this.clearResetFlag}
            selectionGroupIds={selectionGroupIds}
          />
        );
        break;
      case appStates.MISSION_OVER:
        content = (
          <DisplayStatus
            {...status}
            timeTaken={this.state.timeTaken}
            resetStatus={resetStatus}
          />
        );
        break;
      case appStates.ERROR:
        content = <ErrorPage />;
        showHeader = false;
    }
    return (
      <ContentWrapper>
        {showHeader && (
          <Header>
            <Heading>Finding Falcone</Heading>
            <SubHeader>
              <HeaderItem onClick={this.resetData}>Reset</HeaderItem>
              <HeaderItem onClick={this.redirectToHome}>Home</HeaderItem>
            </SubHeader>
          </Header>
        )}
        {content}
        {loading && (
          <Loader>
            <LoadingIndicator />
          </Loader>
        )}
      </ContentWrapper>
    );
  }

  resetData = () => {
    this.setState({ reset: true });
    this.props.resetStatus();
  };

  redirectToHome() {
    window.location.replace("https://github.com/AshnaC/MovieExplorer");
  }

  clearResetFlag = () => {
    this.setState({ reset: false });
  };

  searchFalcon = (timeTaken, payload) => {
    this.setState({ timeTaken });
    this.props.searchFalcon(payload);
  };
}

SelectorLayout.propTypes = {
  vehicles: PropTypes.array,
  resetStatus: PropTypes.func,
  searchFalcon: PropTypes.func,
  planets: PropTypes.array,
  appState: PropTypes.number,
  selectionGroupIds: PropTypes.array,
  appStates: PropTypes.object,
  status: PropTypes.object,
  loading: PropTypes.bool
};

export default SelectorLayout;
