import styled from "styled-components";

export const ListWrapper = styled.div`
  padding: 30px;
  width: 100%;
`;

export const ListItem = styled.div`
  padding: 5px 10px;
  margin-bottom: 15px;
  background: #fff;
  border-radius: 6px;
  box-shadow: 0px 5px 25px 0px rgb(0 0 0 / 20%);
`;

export const FundInfo = styled.div`
  line-height: 31px;
`;

export const FundName = styled.div`
  font-size: 14px;
  font-weight: bold;
  width: 60%;
  display: inline-block;
  color: #666;
  cursor: pointer;
`;

export const AddToCompareIcon = styled.img`
  width: 20px;
  height: 20px;
  position: relative;
  top: -4px;
  cursor: pointer;
`;

export const RatingContainer = styled.div`
  display: inline-block;
  width: calc(40% - 40px);
  position: relative;
  top: 5px;
`;
