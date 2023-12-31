import styled from "styled-components";
import { theme } from "../../styles/Theme";

export const Container = styled.section`
    display: flex;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: ${theme.colors.white};
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99999;

    div.bar{
        width: 100%;
        height: 100%;
        background-color: ${theme.colors.primary};
        display: flex;
        align-items: center;
        justify-content: center;

        span{
            font-size: 32px;
            color: ${theme.colors.white};
            font-weight: 400;
            text-align: center;
            margin-right: 12px;


            @media (max-width: 1024px) {
                font-size: 24px;
            }

        }
    }
    svg.logo{
        position: fixed;
        z-index: 9999999;
        height: 48px;
        width: 168px;
        top: calc(50vh - 24px);
        left: calc(50vw - 84px);

        path{
            fill: ${theme.colors.white}
        }
    }
`;