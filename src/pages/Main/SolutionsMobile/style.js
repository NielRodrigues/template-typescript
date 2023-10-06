import styled from "styled-components";
import { theme } from "../../../styles/Theme";

export const Container = styled.section`
    width: auto;
    min-width: fit-content;
    height: auto;
    min-height: fit-content;
    display: none;
    margin: 80px 0;
    margin-bottom: 0;
    border-radius: 24px;
    flex-direction: column;

    @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
    }

    .content {
        display: flex;
        align-items: center;
        height: 480px;
        width: 100%;
        max-width: 100vw;
        justify-content: space-between;
        padding-left: 24px;
    }

    .slider{
        height: 100%;
        width: 380px;
        max-width: 380px;
        min-width: 380px;
    }
`;

export const Content = styled.div`
    width: 100%;
    min-width: fit-content;
    height: auto;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h3`
    width: calc(100vw - 48px);
    min-width: calc(100vw - 48px);
    padding: 0 24px;
    font-size: 20px;
    color: ${theme.colors.text};
    font-weight: 400;
    line-height: 1.2em;
    margin: 0;
    margin-bottom: 32px;
`;

export const Div2 = styled.div`
    width: calc(100vw - 48px);
    min-width: calc(100vw - 48px);
    padding: 0 24px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 32px;

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
    width: 100%;
    height: 480px;
`;