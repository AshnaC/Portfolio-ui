import styled from "styled-components";
import FontAwesome from "react-fontawesome";

export const Header = styled.div`
    width: 100%;
    line-height: 48px;
    background: #1f6bc0;
    display: flex;
`;

export const SubItem = styled.div`
    width: 240px;
    display: inline-block;
    text-align: center;
    font-weight: bold;
    font-size: 14px;
    color: #fff;
    cursor: pointer;
`;

export const StyledFont = styled(FontAwesome)`
    display: inline-block;
    font-weight: bold;
    color: #fff;
    padding-right: 10px;
`;

export const Loader = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.2);
`;

export const Container = styled.div`
    padding: 30px;
`;

export const ErrorBoundary = styled.div`
    padding: 48px 40px 32px;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
    font-family: inherit;
    font-style: italic;
    letter-spacing: 1.5px;
    height: 400px;
    color: grey;
`;
