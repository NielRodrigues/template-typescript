import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { NavLink } from "react-router-dom";

export const Container = styled.section`
    width: 100%;
    height: auto;
    min-height: calc(100vh - 112px);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;
    justify-content: space-between;
    margin-bottom: 80px;
`;

export const Content = styled.div`
    width: 95%;
    display: flex;
    gap: 48px;
    margin-top: 56px;
    display: flex;
    justify-content: space-between;
    
    div.slogan{
        display: flex;
        flex-direction: column;
        gap: 4px;

        h1{
            font-size: 56px;
            font-weight: 300;
            line-height: 1.2em;
            color: ${theme.colors.text};
            margin: 0;
            display: inline-block;
        }
    }

    div.text-and-button{
        display: flex;
        flex-direction: column;
        gap: 48px;
        width: 30%;

        h2{
            font-size: 18px;
            font-weight: 300;
            line-height: 1.2em;
            color: ${theme.colors.text};
            margin: 0;
            display: inline-block;
        }

        a{
            display: flex;
            align-items: center;
            gap: 24px;
            text-decoration: none;

            span{
                font-size: 18px;
                font-weight: 400;
                line-height: 1.2em;
                color: ${theme.colors.text};
                margin: 0;
                display: inline-block;
            }

            div.icon{
                width: 40px;
                height: 40px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: ${theme.colors.primary};
            }
        }
    }
`;

export const Button = styled(NavLink)`
    display: flex;
    align-items: center;
    gap: 24px;
    text-decoration: none;

    span{
        font-size: 18px;
        font-weight: 400;
        line-height: 1.2em;
        color: ${theme.colors.text};
        margin: 0;
        display: inline-block;
    }

    div.icon{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${theme.colors.primary};
    }
`;

export const BGTop = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    img{
        width: 100%;
        height: auto;
    }
`;