import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { theme } from "../../styles/Theme";

const Animation = keyframes`
    0% {
      box-shadow: inset 0px 0px 0px 5px rgb(41, 80, 255, .1), 0px 0px 0px 0px rgb(41, 80, 255, 0.8);
    }
    100% {
      box-shadow: inset 0px 0px 0px 3px rgb(41, 80, 255, .1), 0px 0px 0px 10px rgb(41, 80, 255, 0);
    }
`;

export const Button = styled(NavLink)`
    height: 64px;
    min-height: 56px;
    width: fit-content;
    max-width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    background-color: ${theme.colors.primary};
    text-decoration: none;
    padding: 4px 24px;
    animation: ${Animation} 1500ms ease-out infinite ;

    span{
        font-size: 18px;
        color: ${theme.colors.text};
        text-align: center;
    }
`;