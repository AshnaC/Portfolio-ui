import styled from "styled-components";

export const ContentWrapper = styled.div`
    width: 100%;
`;

export const SelectorWrapper = styled.div`
    width: 270px;
    height: 270px;
    display: inline-block;
    vertical-align: top;
    margin: 10px;

    background: ${props => {
        return props.imageName ? `url(${props.imageName}) no-repeat` : "#fff";
    }};
    background-size: contain;
    background-size: 100%;
    border-radius: 6px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
`;

export const LightBackground = styled.div`
    ${props => props.showBackGround && `background-color: rgba(255, 255, 255, 0.5);`}
    height: 100%;
    width: 100%;
`;

export const Button = styled.div`
  border: 1px solid #dedede;
  background:#106fb1;
  border-radius: 6px;
  line-height: 40px;
  width: 200px;
  text-align: center;
  ${props => !props.enabled && "opacity: 0.4;"}
  cursor: ${props => (props.enabled ? "pointer" : "default")};
  color: #FFF;
  font-size:16px;
  font-weight:bold;
  margin:auto;
  margin-bottom: 10px;
`;

export const OptionsWrapper = styled.div`
    padding-bottom: 50px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

export const TimeTaken = styled.div`
    width: 100%;
    text-align: center;
    font-family: "Amiri", serif;
    color: #333;
    font-size: 20px;
    font-weight: bold;
    padding: 20px;
`;

export const DarkBackground = styled.div`
    ${props => props.showBackGround && `background-color: rgba(0, 0, 0, 0.5);`}
    height: 100%;
    width: 100%;
    border-radius: 6px;
    padding: 10px;
`;

export const SelectedTile = styled.div`
    border-radius: 6px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    width: 270px;
    margin: 10px;
`;

export const TileItem = styled.div`
    text-align: center;
    padding-bottom: 10px;
    display: inline-block;
    vertical-align: top;
    width: 50%;
    height: 100px;
`;
export const ItemHeader = styled.div`
    font-size: 14px;
    font-weight: bold;
    padding-bottom: 5px;
    margin-bottom: 2px;
    background: aliceblue;
    line-height: 25px;
`;

export const ItemDetail = styled.div`
    padding: 0 10px;
    font-size: 14px;
    color: grey;
    font-weight: bold;
    line-height: 18px;
`;
