import styled from "styled-components";
import { theme } from "../../styles/Theme";

export const Container = styled.header`
    height: 112px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 95%;

    svg.logo{
        height: 26px;
        path{
            fill: ${theme.colors.white};
        }
    }
`;