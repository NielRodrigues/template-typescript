import styled from "styled-components";
import { theme } from "../../../styles/Theme";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    height: 100vh;
    background-color: teal;
    display: flex;
    margin: 80px 0;
`;

export const Col = styled.div`
    width: calc(33.33vw - 96px);
    min-width: calc(33.33vw - 96px);
    height: calc(100vh - 96px);
    min-height: calc(100% - 96px);
    background-color: #FFFFFF;
    padding: 48px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

export const Col2 = styled.div`
    width: 66.66vw;
    min-width: 66.66vw;
    height: 100%;
    background-color: ${theme.colors.gray900};
    display: flex;
    flex-direction: column;
`;

export const Line1 = styled.div`
    width: calc(100% - 96px);
    padding: 48px;
    margin: 48px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2.counter{
        font-size: 104px;
        color: ${theme.colors.text};
        margin: 0;
        font-weight: 100;
    }

    h4{
        font-size: 24px;
        color: ${theme.colors.text};
        margin: 0;
        font-weight: 400;
        line-height: 1.2em;
        max-width: calc(33.33vw - 48px);
    }
`;

export const Line2 = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 20px;
    display: flex;
    flex-direction: column;

    div.line-2-1{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 50%;
        min-height: 50%;
        width: 100%;
        overflow: hidden;

        div.col-1-line-2-1{
            width: calc(50% - 96px);
            height: calc(100% - 96px);
            padding: 48px;
            display: flex;
            align-items: center;
            justify-content: center;

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
            }
        }
    }

    div.line-2-2{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 50%;
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
            }
        }
    }
`;