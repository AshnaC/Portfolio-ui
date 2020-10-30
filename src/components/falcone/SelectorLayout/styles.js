import styled from "styled-components";

export const Loader = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.2);
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
`;

export const Heading = styled.div`
    font-family: "Amiri", serif;
    font-size: 30px;
    font-weight: bold;
    display: inline-block;
    width: calc(100% - 120px);
    text-align: center;
`;

export const Header = styled.div`
    width: 100%;
    background: #1f6bc0;
    color: #fff;
`;

export const HeaderItem = styled.div`
    font-family: "Amiri", serif;
    padding: 10px;
    cursor: pointer;
    // font-weight: bold;
`;

export const SubHeader = styled.div`
    width: 120px;
    display: flex;
    margin-left: auto;
`;
