import styled from "styled-components";
import { theme } from "../../../styles/Theme";

export const Container = styled.section`
    width: auto;
    height: 2480px;
    display: flex;
    margin: 80px 0;
`;

export const Scroll = styled.div`
    width: fit-content;
    min-width: fit-content;
    height: 480px;
    display: flex;
    align-items: center;
    border-radius: 24px;
    position: relative;

    div.line{
        height: 1px;
        width: calc(100% - 156px);
        background-color: ${theme.colors.gray100};
        position: absolute;
        top: 64px;
        left: 48px;
    }

    div.line-active{
        height: 1px;
        width: 24%;
        max-width: calc(100% - 156px);
        background-color: ${theme.colors.primary};
        position: absolute;
        top: 64px;
        left: 48px;
        transition: all .4s ease-out;
    }

    div.square{
        height: 16px;
        width: 16px;
        background-color: ${theme.colors.gray100};
        position: absolute;
        top: 56px;
        left: 48px;
        transition: all .4s ease-out;

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
        top: 56px;
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
        top: 50px;
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
        height: 50%;
        margin: 0 10vw;

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

    &:before{
        content: 'Trilha Empresarial da NWB';
        position: absolute;
        left: 48px;
        top: 0;
        font-size: 32px;
        font-weight: 400;
        color: ${theme.colors.text};
        margin: 0;
    }
`;