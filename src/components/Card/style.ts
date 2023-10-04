import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
    height: 100%;
    width: 380px;
    min-width: 380px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.gray900};
    color: ${theme.colors.text};

    svg.icon{
        height: 56px;
        width: 56px;
        margin-bottom: 40px;
        path {
            fill: ${theme.colors.white};
        }
    }

    h2{
        font-size: 20px;
        margin: 16px 0;
        color: ${theme.colors.text};
        font-weight: 300;
    }

    h3{
        font-size: 16px;
        color: #BCBCBC;
        font-weight: 300;
        text-align: center;
        max-width: 82%;
        margin: 0;
        line-height: 1.6rem;
    }
`;

export const More = styled(NavLink)`
    display: flex;
    align-items: center;
    text-decoration: none;
    gap: 8px;
    margin-top: 12px;

    span{
        font-size: 16px;
        color: ${theme.colors.text};
        font-weight: 400;
    }

    div.icon-2{
        min-height: 40px;
        height: 40px;
        width: 40px;
        min-width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${theme.colors.primary};
        border-radius: 50%;

        svg.icon-more{
            height: 16px;
            width: 16px;
            path {
                fill: ${theme.colors.white};
            }
        }
    }
`;