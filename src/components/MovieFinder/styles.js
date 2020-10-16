import styled from "styled-components";

export const ExplorerWrapper = styled.div`
    position: relative;
    z-index: 3;
    margin-left: 20px;
    margin-right: 20px;
`;

export const Search = styled.input`
    width: 40vw;
    line-height: 40px;
    background: #fff;
    font-style: italic;
    box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.2);
    font-weight: bold;
    padding: 0 50px;
    font-size: 12px;
    border: none;
    border-radius: 5px;
    color: grey;
`;

export const ResultWrapper = styled.div`
    position: absolute;
    min-width: 40vw;
    right: 0;
    background: #fff;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
    max-height: calc(100vh - 130px);
    overflow-y: auto;
    overflow-x: hidden;
    z-index: 2;
    border-radius: 0 0 6px 6px;
`;

export const SearchItem = styled.div`
    cursor: pointer;
    line-height: 32px;
    padding: 0 40px;
    border-bottom: 1px solid #e4e4e4;
    &:hover {
        background: #e3eefb;
    }
`;

export const Interstitial = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
`;
