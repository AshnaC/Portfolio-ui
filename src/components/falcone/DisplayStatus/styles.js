import styled from "styled-components";
import FontAwesome from "react-fontawesome";

export const StatusMessage = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  font-style: italic;
  padding: 40px 0 100px;
`;

export const ContentWrapper = styled.div`
  text-align: center;
`;

export const Button = styled.div`
  border: 1px solid #dedede;
  background: #106fb1;
  border-radius: 6px;
  line-height: 40px;
  width: 200px;
  text-align: center;
  cursor: pointer;
  margin: auto;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;

export const MissionDetails = styled.div`
  font-size: 16px;
  line-height: 30px;
  color: #a9a9a9;
`;

export const StyledIcon = styled(FontAwesome)`
  padding-right: 10px;
  color: cornflowerblue;
  font-weight: bold;
`;
