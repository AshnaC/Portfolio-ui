import styled from "styled-components";
import FontAwesome from "react-fontawesome";

export const Wrapper = styled.div`
    position: relative;
    width: 100%;
    min-height: 520px;
    display: flex;
    color: #fff;
`;

export const Interstitial = styled.div`
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: 2;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 1) 100%);
`;

export const ImageInterstitial = styled.div`
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    background-image: url(${props => props.imgUrl});
`;

export const ImageWrapper = styled.div`
    position: relative;
    width: 75%;
    height: 100%;
    background-image: url(${props => props.imgUrl});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-color: #000;
`;

export const InterstitialWhite = styled.div`
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: 2;
    background-color: rgba(255, 255, 255, 0.5);
`;

export const Content = styled.div`
    position: relative;
    width: 60%;
    height: 100%;
    z-index: 2;
    margin-left: auto;
    text-align: center;
    padding: 16px 0;
`;

export const Title = styled.div`
    font-size: 29px;
    font-weight: bold;
    padding: 16px 0;
`;

export const OverView = styled.div`
    line-height: 22px;
    font-size: 14px;
    width: 80%;
    margin: auto;
    letter-spacing: 0.3px;
`;

export const TagLine = styled.div`
    font-size: 23px;
    font-family: cursive;
    font-weight: bold;
    padding: 12px 0 20px 0;
`;

export const Genres = styled.div`
    display: flex;
    justify-content: center;
    font-size: 14px;
`;

export const GenreItem = styled.div`
    display: flex;
    justify-content: center;
    font-size: 14px;
    padding: 0 8px;
`;

export const CastWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 8px;
    align-items: flex-end;
`;

export const Cast = styled.div`
    padding: 16px;
`;

export const CastName = styled.div`
    padding: 8px 0;
`;

export const Character = styled.div`
    letter-spacing: 1px;
    font-weight: bold;
    padding-left: 8px;
`;

export const Label = styled.span`
    font-weight: normal;
`;

export const CastImage = styled.img`
    height: 72px;
    width: 72px;
    border-radius: 4px;
    border: 1px solid;
    padding: 1px;
`;

export const RatingWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 1px;
    font-weight: bold;
`;

export const ProgressWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    padding-left: 16px;
}
`;

export const ChartWrapper = styled.div`
    width: 64px;
    margin-left: 16px;
`;

export const OverViewHeading = styled.div`
    letter-spacing: 2px;
    font-size: 14px;
    width: 72px;
    border-bottom: 1px solid;
    margin: auto;
    margin-bottom: 8px;
`;
