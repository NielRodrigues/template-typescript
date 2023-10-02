import styled from "styled-components";
import { theme } from "../../../styles/Theme";

export const Container = styled.div`
    height: 32px;
    width: 32px;
    min-width: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    width: auto;
    position: absolute;
    right: 0;

    div.line{
        width: 2px;
        height: 100%;
        background-color: ${theme.colors.gray700};
        transition: all .5s cubic-bezier(0.75, 0, 0.25, 1); 
    }

    &:hover{
        div.line:nth-child(2) {
            width: 4px;
        }

        div.line:nth-child(3) {
            width: 6px;
        }
    }


`;

export const ContentHover = styled.div`
    height: 24px;
    border-radius: 4px;
    background-color: ${theme.colors.gray900};
    border: 1px solid ${theme.colors.gray700};
    display: none;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;

    span{
        font-size: 16px;
        color: ${theme.colors.text};
        padding: 0 16px;
    }
`;