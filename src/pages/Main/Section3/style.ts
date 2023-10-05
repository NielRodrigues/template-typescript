import styled, { keyframes } from "styled-components";
import { theme } from "../../../styles/Theme";
import { NavLink } from "react-router-dom";

export const Container = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
`;

export const AnimationButton = keyframes`
    0% {
      box-shadow: inset 0px 0px 0px 5px rgb(255, 255, 255, .1), 0px 0px 0px 0px rgb(255, 255, 255, 0.8);
    }
    100% {
      box-shadow: inset 0px 0px 0px 3px rgb(255, 255, 255, .1), 0px 0px 0px 10px rgb(255, 255, 255, 0);
    }
`;

export const Col = styled.div`
    width: calc(33.33vw - 48px);
    height: auto;
    min-height: calc(100vh - 48px);
    padding-top: 48px;
    padding-left: 48px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 80px;
    overflow: hidden;

    h3.title{
        font-size: 20px;
        color: ${theme.colors.text};
        font-weight: 400;
        line-height: 1.2em;
        margin: 0;
    }

    div.contact-and-image{
        display: flex;
        flex-direction: column;
        gap: 32px;
        width: 100%;
        height: 60%;

        h4{
            font-size: 20px;
            color: ${theme.colors.text};
            font-weight: 400;
            line-height: 1.2em;
            margin: 0;
        }

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }
    }
`;

export const Col2 = styled.div`
    width: calc(33.33vw - 96px);
    height: auto;
    min-height: calc(100vh - 72px);
    padding-top: 48px;
    padding-left: 48px;
    padding-right: 48px;
    padding-bottom: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 80px;
    overflow: hidden;

    h2{
        font-size: 56px;
        color: ${theme.colors.text};
        font-weight: 400;
        line-height: 1.2em;
        margin: 0;
        margin-top: -8px;
    }

    div.text{
        display: flex;
        flex-direction: column;
        gap: 24px;

        h5{
            font-size: 20px;
            color: ${theme.colors.text};
            font-weight: 400;
            line-height: 1.2em;
            margin: 0;
            font-family: "Tobias";
        }
    }
`;

export const Col3 = styled.div`
    width: 33.33vw;
    min-width: 33.33vw;
    height: 100%;
    min-height: 100%;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    min-height: 100vh;
    overflow: hidden;

    div.buy-div{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50%;
        padding-top: 48px;
        padding-bottom: 48px;
        background-color: ${theme.colors.primary};
    }

    div.desc{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 48px;
        padding-bottom: 48px;
        background-color: ${theme.colors.primary};
        
        h3{
            font-size: 22px;
            color: ${theme.colors.text};
            font-weight: 400;
            line-height: 1.2em;
            margin: 0;
            font-family: "Tobias";
            width: 80%;
        }
    }
`;

export const Button = styled(NavLink)`
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    border-radius: 4px;
    gap: 8px;
    background-color: ${theme.colors.white};
    padding: 0 32px;
    animation: ${AnimationButton} 1500ms infinite ease-out;

    span{
        font-size: 18px;
        font-weight: 400;
        color: ${theme.colors.background};
    }
`;