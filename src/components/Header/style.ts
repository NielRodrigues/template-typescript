import styled from "styled-components";
import { theme } from "../../styles/Theme";

export const Container = styled.header`
    height: auto;
    width: calc(100vw - 96px);
    padding: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    svg.logo{
        height: 26px;
        path{
            fill: ${theme.colors.white};
        }
        
    }

    @media (max-width: 1024px) {
        padding: 32px;
    }
    @media (max-width: 767px) {
        padding: 24px;
    }
`;