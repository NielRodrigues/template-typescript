import styled from "styled-components";
import { theme } from "../../../styles/Theme";

export const Container = styled.section`
    width: auto;
    min-width: fit-content;
    height: 200vh;
    min-height: 2000px;
    display: flex;
    margin: 80px 0;
    border-radius: 24px;
`;

export const Content = styled.div`
    width: auto;
    min-width: fit-content;
    height: auto;
    max-height: 417px;
    display: flex;
`;

export const Title = styled.h3`
    width: calc(33.33vw - 48px);
    min-width: calc(33.33vw - 48px);
    padding-left: 48px;
    font-size: 20px;
    color: ${theme.colors.text};
    font-weight: 400;
    line-height: 1.2em;
    margin: 0;
`;

export const Div2 = styled.div`
    width: calc(33.33vw - 48px);
    min-width: calc(33.33vw - 48px);
    padding-right: 48px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    h1{
        font-size: 56px;
        color: ${theme.colors.text};
        font-weight: 400;
        line-height: 1.2em;
        margin: 0;
    }

    h2{
        font-size: 20px;
        color: ${theme.colors.gray100};
        font-weight: 400;
        line-height: 1.4em;
        margin: 0;
        margin-bottom: 20px;
        font-family: "Tobias";
    }
`;

export const Scroll = styled.div`
    width: auto;
    height: 480px;
`;

export const Panel = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    gap: 28px;
`;