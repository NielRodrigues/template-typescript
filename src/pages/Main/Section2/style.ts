import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import image from "../../../assets/images/img-2.jpg"

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    height: auto;
    display: flex;

    @media (max-width: 1024px) {
        flex-direction: column;
    }
`;

export const Col = styled.div`
    width: calc(33.33vw - 120px);
    min-width: calc(33.33vw - 120px);
    height: inherit;
    min-height: 100%;
    background-color: #1A1A1A;
    padding: 48px;
    padding-right: 72px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 32px;
    overflow: hidden;
    background-image: url(${image});
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;

    h1{
        font-size: 28px;
        color: ${theme.colors.text};
        font-weight: 400;
        line-height: 1.2em;
        margin: 0;
    }

    @media (max-width: 1024px) {
        width: calc(100vw - 64px);
        min-width: calc(100vw - 64px);
        padding-right: none;
        padding: 32px;
    }

    svg.logo{
        width: 100%;
        height: auto;

        path{
            fill: ${theme.colors.white};
        }
    }
`;

export const Col2 = styled.div`
    width: 66.66vw;
    min-width: 66.66vw;
    height: inherit;
    background-color: ${theme.colors.gray900};
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 1024px) {
        width: 100vw;
        height: auto;
        min-height: fit-content;
    }
`;

export const Line1 = styled.div`
    width: calc(100% - 96px);
    padding: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto 0;
    gap: 48px;

    h2.counter{
        font-size: 104px;
        color: ${theme.colors.text};
        margin: 0;
        font-weight: 100;
        text-align: center;

        @media (max-width: 1024px) {
            font-size: 72px;
        }
    }

    h4{
        font-size: 24px;
        color: ${theme.colors.text};
        margin: 0;
        font-weight: 400;
        line-height: 1.2em;
        max-width: calc(33.33vw - 48px);

        @media (max-width: 1024px) {
            font-size: 22px;
            width: calc(50vw - 48px);
            max-width: none;
        }
    }

    @media (max-width: 1024px) {
        gap: 32px;
        width: calc(100% - 64px);
        padding: 32px;
    }
`;

export const Line2 = styled.div`
    width: 100%;
    height: 420px;
    min-height: 420px;
    display: flex;
    flex-direction: column;

    @media (max-width: 1024px) {
        height: 380px;
        min-height: 380px;
    }

    div.line-2-1{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 50%;
        min-height: 200px;
        width: 100%;
        overflow: hidden;

        div.col-1-line-2-1{
            width: calc(50% - 96px);
            height: calc(100% - 96px);
            padding: 48px;
            display: flex;
            align-items: center;
            justify-content: center;

            @media (max-width: 1024px) {
                width: calc(50% - 64px);
                height: calc(100% - 64px);
                padding: 32px;
            }

            h3{
                font-size: 18px;
                color: ${theme.colors.text};
                line-height: 1.2em;
                font-family: "Tobias";
                margin: 0;
                font-weight: 100;
                
            }
        }

        div.col-2-line-2-1{
            width: calc(50% - 96px);
            height: calc(100% - 96px);
            padding: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            background-color: ${theme.colors.primary};

            @media (max-width: 1024px) {
                width: calc(50% - 64px);
                height: calc(100% - 64px);
                padding: 32px;
            }

            svg{
                width: 32px;
                height: 32px;
            }

            h2{
                font-size: 24px;
                color: ${theme.colors.text};
                line-height: 1.2em;
                margin: 0;
                font-weight: 100;

                @media (max-width: 1024px) {
                    font-size: 22px;
                }
            }
        }
    }

    div.line-2-2{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 50%;
        min-height: 200px;
        width: 100%;
        overflow: hidden;

        div.col-1-line-2-2{
            width: calc(50% - 96px);
            height: calc(100% - 96px);
            padding: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            background-color: ${theme.colors.primary};

            @media (max-width: 1024px) {
                width: calc(50% - 64px);
                height: calc(100% - 64px);
                padding: 32px;
            }

            svg{
                width: 32px;
                height: 32px;
            }

            h2{
                font-size: 24px;
                color: ${theme.colors.text};
                line-height: 1.2em;
                margin: 0;
                font-weight: 100;

                @media (max-width: 1024px) {
                    font-size: 22px;
                }
            }
        }

        div.col-2-line-2-2{
            width: calc(50% - 96px);
            height: calc(100% - 96px);
            padding: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            background-color: ${theme.colors.primary};

            @media (max-width: 1024px) {
                width: calc(50% - 64px);
                height: calc(100% - 64px);
                padding: 32px;
            }

            svg{
                width: 32px;
                height: 32px;
            }

            h2{
                font-size: 24px;
                color: ${theme.colors.text};
                line-height: 1.2em;
                margin: 0;
                font-weight: 100;

                @media (max-width: 1024px) {
                    font-size: 22px;
                }
            }
        }
    }
`;