import styled, { keyframes } from "styled-components";
import { theme } from "../../../styles/Theme";
import { NavLink } from "react-router-dom";

export const Container = styled.section`
    width: 100vw;
    max-width: 100vw;
    height: auto;
    display: none;
    margin: 80px 0;

    @media (max-width: 767px) {
        display: flex;
    }
`;

export const AnimationButton = keyframes`
    0% {
      box-shadow: inset 0px 0px 0px 5px rgb(41, 80, 255, .1), 0px 0px 0px 0px rgb(41, 80, 255, 0.8);
    }
    100% {
      box-shadow: inset 0px 0px 0px 3px rgb(41, 80, 255, .1), 0px 0px 0px 10px rgb(41, 80, 255, 0);
    }
`;


export const Scroll = styled.div`
    width: fit-content;
    min-width: fit-content;
    height: 580px;
    display: flex;
    align-items: center;
    border-radius: 24px;
    position: relative;

    .content {
        display: flex;
        align-items: center;
        height: 360px;
        width: 100%;
        max-width: 100vw;
        justify-content: space-between;
    }

    .slider{
        height: 100%;
        width: 380px;
        min-width: 380px;
        max-width: 380px;
        display: flex;
        align-items: center;
        position: relative;
        border-radius: 20px;
        justify-content: center;

            span.text{
                font-size: 20px;
                font-weight: 200;
                color: ${theme.colors.text};
                margin: 0;
                position: absolute;
                top: 16px;
                left: 24px;
            }

            div.line{
                height: 1px;
                width: 100%;
                background-color: ${theme.colors.primary};
                position: absolute;
                top: 72px;
            }

            div.square{
                height: 16px;
                width: 16px;
                background-color: ${theme.colors.primary};
                position: absolute;
                top: 64px;
                left: 24px;
            }

            div.ball{
                height: 16px;
                width: 16px;
                background-color: ${theme.colors.primary};
                border-radius: 50%;
                position: absolute;
                top: 64px;
                left: 24px;
            }

            div.end{
                height: 28px;
                width: 1px;
                background-color: ${theme.colors.primary};
                position: absolute;
                top: 58px;
                right: 24px;
            }
    }

    div.line{
        height: 1px;
        width: calc(100% - 156px);
        background-color: ${theme.colors.gray100};
        position: absolute;
        top: 72px;
        left: 48px;
    }

    span.text{
        font-size: 20px;
        font-weight: 200;
        color: ${theme.colors.text};
        margin: 0;
        position: absolute;
        top: 28px;
        left: 48px;
    }

    div.line-active{
        height: 1px;
        width: 24%;
        max-width: calc(100% - 156px);
        background-color: ${theme.colors.primary};
        position: absolute;
        top: 72px;
        left: 48px;
        transition: all .4s ease-out;
    }

    div.square{
        height: 16px;
        width: 16px;
        background-color: ${theme.colors.gray100};
        position: absolute;
        top: 64px;
        left: 48px;

        &.active{
            background-color: ${theme.colors.primary};
        }
    }

    div.ball{
        height: 16px;
        width: 16px;
        border-radius: 50%;
        background-color: ${theme.colors.gray100};
        position: absolute;
        top: 64px;
        left: 48px;
        
        &.active{
            background-color: ${theme.colors.primary};
        }
    }

    div.end{
        height: 28px;
        width: 1px;
        background-color: ${theme.colors.gray100};
        position: absolute;
        top: 58px;
        right: 108px;

        &.active{
            background-color: ${theme.colors.primary};
        }
    }

    div.text{
        display: flex;
        flex-direction: column;
        gap: 16px;
        width: 224px;
        min-width: 224px;
        height: 60%;
        margin-top: 88px;

        h5{
            font-size: 14px;
            font-weight: 200;
            color: ${theme.colors.text};
            margin: 0;
        }

        h2{
            font-size: 40px;
            font-weight: 400;
            color: ${theme.colors.text};
            margin: 0;
        }

        h4{
            font-size: 16px;
            font-weight: 200;
            color: ${theme.colors.text};
            margin: 0;
        }
    }

    div.title{
        position: absolute;
        left: 24px;
        top: 0;
        font-size: 40px;
        font-weight: 400;
        color: ${theme.colors.text};
        margin: 0; 
        transition: all .4s ease-out;
    }
`;

export const Button = styled(NavLink)`
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    border-radius: 4px;
    gap: 8px;
    background-color: ${theme.colors.primary};
    padding: 0 32px;
    animation: ${AnimationButton} 1500ms infinite ease-out;
    position: absolute;
    bottom: 0;
    left: 24px;
    transition: all .4s ease-out;

    span{
        font-size: 16px;
        font-weight: 400;
        color: ${theme.colors.text};
    }
`;

export const Content = styled.div`
    height: auto;
    display: none;
    align-items: center;
    width: 100vw;
    overflow-x: auto;
    overflow-y: hidden;


    &::-webkit-scrollbar {
    width: 0px;
    height: 4px;
    }

    &::-webkit-scrollbar-track {
    background: transparent;
    }

    &::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.gray900};
    background-color: transparent;
    }
`;

