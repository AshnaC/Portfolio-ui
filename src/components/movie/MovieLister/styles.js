import styled from "styled-components";

export const Poster = styled.img`
    // height: 240px;
    width: 40%;
    box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.2);
`;

export const MovieDetail = styled.div``;

export const MovieCard = styled.div`
    min-height: 240px;
    border: 1px solid #dedede;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    display: flex;
    background: #fff;
    cursor: pointer;
`;

export const MovieListWrapper = styled.div`
    display: grid;
    -ms-grid-columns: (minmax(25rem, 1fr)) [auto-fill];
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
    grid-gap: 3rem;
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
    padding-bottom: 10px;
    color: grey;
`;
