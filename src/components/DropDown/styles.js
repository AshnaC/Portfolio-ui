import styled from "styled-components";
import FontAwesome from "react-fontawesome";

export const DropDownWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const Selector = styled.div`
  width: 100%;
  line-height: 40px;
  border: 1px solid #dedede;
  border-radius: 6px;
`;

export const Options = styled.div`
  line-height: 30px;
  padding: 0 20px;
  cursor: pointer;
  &:hover {
    background: #e3eefb;
  }
  line-height: 30px;
  padding: 0 20px;
  cursor: pointer;
`;

export const StyledArrow = styled(FontAwesome)`
  display: inline-block;
  width: 20px;
  font-weight: bold;
  color: #4991e2;
`;

export const SelectedItem = styled.div`
  width: calc(100% - 20px);
  display: inline-block;
  padding: 0 20px;
  font-size: 14px;
  font-weight: bold;
  color: #333;
  font-style: italic;
`;

export const OptionsWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 42px;
  background: #fff;
  position: absolute;
  width: 99%;
  left: 4px;
  top: 42px;
  background: #fff;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  border-radius: 0 0 6px 6px;
  font-size: 14px;
  font-weight: bold;
  color: #333;
  z-index: 2;
`;

export const Interstitial = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
