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
    }
`;