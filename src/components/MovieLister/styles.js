import styled from "styled-components";

export const Poster = styled.img`
    height: 240px;
    width: 160px;
    box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.2);
`;

export const MovieDetail = styled.div`
    height: 240px;
    width: 240px;
`;

export const MovieCard = styled.div`
    width: 400px;
    border: 1px solid #dedede;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: flex-start;
    margin: 15px;
    background: #fff;
    cursor: pointer;
`;

export const MovieListWrapper = styled.div`
    flex-wrap: wrap;
    display: flex;
    justify-content: space-between;
    &:after {
        content: "";
        width: 400px;
    }
`;

export const Header = styled.div`
    border-bottom: 1px solid #dedede;
    padding: 0 8px;
    width: 100%;
    color: #333;
    text-align: center;
`;

export const Rating = styled.div`
    font-weight: bold;
    font-size: 12px;
    color: #66ff66;
    padding-bottom: 4px;
`;

export const MovieName = styled.div`
    font-weight: bold;
    padding: 8px 0 0;
`;

export const Description = styled.div`
    font-size: 12px;
    color: #a9a9a9;
    height: 162px;
    padding: 16px;
    overflow: hidden;
`;

export const Heading = styled.div`
    font-weight: bold;
    font-style: italic;
    font-size: 20px;
    padding-left: 15px;
    color: grey;
`;
