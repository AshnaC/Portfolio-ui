import styled from "styled-components";

export const RadioButton = styled.div`
  height: 24px;
  width: 24px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #c8c8c8;
  cursor: ${props => (props.enableOption ? "pointer" : "default")};
`;

export const Selector = styled.div`
  height: 12px;
  width: 12px;
  border-radius: 100%;
  ${props =>
    props.selected &&
    `box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.26);
          background: #0279b7;`};
`;

export const ItemWrapper = styled.div`
  display: flex;
  height: 40px;
  ${props => !props.enableOption && "opacity: 0.4;"}
`;

export const Label = styled.div`
  color: #fff
  line-height: 24px;
  font-size: 14px;
  padding-left: 30px;
  font-weight: bold;
`;

export const ListWrapper = styled.div`
  margin-top: 30px;
  width: 100%;
  margin: auto;
  padding: 10px;
  padding-left: 15px;
  padding-top: 30px;
`;
