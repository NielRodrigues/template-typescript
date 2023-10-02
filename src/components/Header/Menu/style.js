import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
    height: auto;
    width: auto;
`;

export const MenuBurger = styled.div`
    height: 20px;
    width: 28px;
    max-width: 28px;
    min-width: 28px;
    overflow: hidden;
    cursor: pointer;
    position: relative;
    right: 0;
    overflow: hidden;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;

    div.line{
        width: auto;
        height: 3px;
        display: flex;
        align-items: flex-end;
        gap: 20px;
        margin-right: 0;

        div.line-2{
            width: 28px;
            height: 100%;
            background-color: ${theme.colors.gray700};
        }

        


    }
`;

export const Navigation = styled.div`
    width: 0px;
    height: 0px;
    border-radius: 16px;
    background-color: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 0px;
    position: absolute;
    right: 0;
    top: 88px;
    z-index: 9998;
    transition: all .8s cubic-bezier(.8, 0, 0.1, 1);
    overflow: hidden;

    div.line-header-menu{
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        transition: all .4s cubic-bezier(.75, 0, 0.25, 1);

        span{
            font-size: 14px;
            font-weight: 300;
            color: #BCBCBC;
            margin-bottom: 8px;
        }

        svg{
            width: 28px;
            height: 28px;
            transition: all .8s cubic-bezier(.75, 0, 0.25, 1);
            cursor: pointer;

            path{
                stroke: #BCBCBC;
            }

            &:hover{
                transform: rotate(90deg);
            }
        }
    }
`;

export const LinkMenu = styled(NavLink)`
    width: fit-content;
    color: #000000;
    text-decoration: none;

    span {
        font-size: 32px;
        font-weight: 400;
        color: #000000;
        text-decoration: none;
        position: relative;
        transition: all .4s cubic-bezier(.75, 0, 0.25, 1);

        &:before{
            content: '';
            width: 0%;
            height: 2px;
            position: absolute;
            bottom: -0px;
            left: 0;
            background-color: ${theme.colors.primary};
            transition: all .4s cubic-bezier(.75, 0, 0.25, 1);
            z-index: 99999;
        }
    }
    &:hover {
        span:before{
            width: 100%;
        }
    }
`;
