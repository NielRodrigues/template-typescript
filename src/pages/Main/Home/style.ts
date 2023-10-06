import styled, { keyframes} from "styled-components";
import { theme } from "../../../styles/Theme";
import { NavLink } from "react-router-dom";

export const Animation = keyframes`
    0%{
        transform: translateY(-192px);
    }
    100%{
        transform: translateY(512px);
    }
`;

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
    position: relative;
`;

export const Content = styled.div`
    width: 100%;
    gap: 48px;
    margin-top: 24px;
    display: flex;
    justify-content: space-between;
    
    div.slogan{
        display: flex;
        flex-direction: column;
        gap: 4px;
        max-width: 40%;
        padding-left: 48px;

        span{
            font-size: 56px;
            font-weight: 300;
            line-height: 1.2em;
            color: ${theme.colors.text};
            margin: 0;
            display: inline-block;
            margin-right: 10px;
        }

        h1{
            font-size: 56px;
            font-weight: 300;
            line-height: 1.2em;
            height: fit-content;
            color: ${theme.colors.text};
            margin: 0;
            display: inline-block;
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        }

        @media (max-width: 1024px) {
            width: calc(100vw - 64px);
            padding: 0 32px;
            max-width: none;
        }

        @media (max-width: 767px) {
            width: calc(100vw - 48px);
            padding: 0 24px;
            max-width: none;

            h1{
                font-size: 40px;
            }
        }
    }

    div.text-and-button{
        display: flex;
        flex-direction: column;
        gap: 48px;
        width: calc(33.33vw - 48px);
        padding-right: 48px;

        h2{
            font-size: 18px;
            font-family: "Tobias";
            font-weight: 400;
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

        @media (max-width: 1024px) {
            width: calc(100vw - 64px);
            padding: 0 32px;
            max-width: none;
            margin-bottom: 24px;
        }

        @media (max-width: 767px) {
            width: calc(100vw - 48px);
            padding: 0 24px;
            max-width: none;
        }
    }

    @media (max-width: 1024px) {
        flex-direction: column;
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

        &.desktop{
            display: flex;
        }

        &.tablet{
            display: none;
        }

        &.mobile{
            display: none;
        }

        @media (max-width: 1024px) {
            &.desktop{
                display: none;
            }

            &.tablet{
                display: flex;
            }

            &.mobile{
                display: none;
            }
        }
    }
`;

export const ScrollIndicator = styled.div`
  width: 2px;
  border-radius: 2px;
  height: 152px;
  background-color: ${theme.colors.gray700};
  position: absolute;
  bottom: 0px;
  left: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  &:before{
    content: '';
    width: 100%;
    top: 0;
    left: 0;
    height: 100%;
    background-color: ${theme.colors.primary};
    animation: ${Animation} 2s infinite linear;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;