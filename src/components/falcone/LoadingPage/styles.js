import styled from "styled-components";
import FontAwesome from "react-fontawesome";

export const StyledFont = styled(FontAwesome)`
  display: inline-block;
  font-weight: bold;
  color: #fff;
  padding-right: 10px;
`;

export const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #b3d4fc;
`;

export const Message = styled.div`
  color: darkgrey;
  font-size: 20px;
  font-weight: bold;
`;
