import styled from "styled-components";
import { theme } from "../../styles/Theme";

export const Container = styled.footer`
    width: calc(100vw - 96px);
    padding: 0 48px;
    margin-top: 80px;
    height: fit-content;
    min-height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 88px;
    padding-bottom: 48px;
    overflow: hidden;

    svg{
        width: 100%;
        height: auto;

        path{
            fill: ${theme.colors.white}
        }

    }

    @media (max-width: 1024px) {
        width: calc(100vw - 64px);
        padding: 0 32px;
    }

    @media (max-width: 767px) {
        width: calc(100vw - 48px);
        padding: 0 24px;
    }
`;

export const Line = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media (max-width: 767px) {
        flex-direction: column;
    }

    h1{
        font-size: 48px;
        font-weight: 400;
        line-height: 1.2em;
        color: ${theme.colors.text};
        margin: 0;

        @media (max-width: 767px) {
            margin-bottom: 48px;
        }
    }

    div.social-media{
        width: calc(33.33vw - 48px);
        display: flex;
        flex-direction: column;
        gap: 16px;

        h3{
            font-size: 14px;
            font-weight: 300;
            line-height: 1.2em;
            color: ${theme.colors.gray100};
            margin: 0;
        }
    }
`;