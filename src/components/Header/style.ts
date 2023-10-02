import styled from "styled-components";
import { theme } from "../../styles/Theme";

export const Container = styled.header`
    height: 112px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 95%;
    position: relative;

    svg.logo{
        height: 26px;
        z-index: 999999;
        path{
            fill: ${theme.colors.white};
        }
        
    }
`;