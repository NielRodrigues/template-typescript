import styled, { keyframes} from "styled-components";
import { theme } from "../../../styles/Theme";
import { NavLink } from "react-router-dom";

export const Animation = keyframes`
    0%{
        height: 0%;
        transform: translateY(0px);
        visibility: unset;
    }
    50%{
        height: 100%;
        transform: translateY(0px);
    }
    75%{
        transform: translateY(192px);
        visibility: hidden;
    }
    100%{
        height: 0%;
        transform: translateY(192px);
        visibility: hidden;
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
    display: flex;
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

export const ScrollIndicator = styled.div`
  width: 2px;
  border-radius: 2px;
  height: 192px;
  background-color: ${theme.colors.gray700};
  position: absolute;
  bottom: 128px;
  left: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  div.active{
    background-color: ${theme.colors.primary};
    width: 100%;
    height: 0%;
    transition: all 0.5s linear;
  }

  &:before{
    content: '';
    width: 100%;
    top: 0;
    left: 0;
    height: 0%;
    background-color: ${theme.colors.primary};
    animation: ${Animation} 2s infinite linear;
  }
`;