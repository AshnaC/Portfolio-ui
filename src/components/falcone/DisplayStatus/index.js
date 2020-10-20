import React from "react";
import PropTypes from "prop-types";

import {
  StatusMessage,
  ContentWrapper,
  Button,
  MissionDetails,
  StyledIcon
} from "./styles";

function DisplayStatus(props) {
  let content = null;
  if (props.status === "success") {
    content = (
      <StatusMessage>
        <StyledIcon name="thumbs-o-up" />
        Success! Congrats on finding Falcone
        <MissionDetails>Planet found: {props.planet_name}</MissionDetails>
        <MissionDetails>Time Taken: {props.timeTaken}</MissionDetails>
      </StatusMessage>
    );
  } else {
    content = (
      <StatusMessage>
        <StyledIcon name="thumbs-o-down" />
        Mission Failed! Falcone is safe and sound.
      </StatusMessage>
    );
  }
  return (
    <ContentWrapper>
      {content}
      <Button onClick={props.resetStatus}>Start Again</Button>
    </ContentWrapper>
  );
}

DisplayStatus.propTypes = {
  status: PropTypes.string,
  planet_name: PropTypes.string,
  timeTaken: PropTypes.string
};

export default DisplayStatus;
