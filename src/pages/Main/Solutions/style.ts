import styled from "styled-components";
import { theme } from "../../../styles/Theme";

export const Container = styled.section`
    width: 95%;
    display: flex;
    justify-content: space-between;
    margin: 44px 0;
`;

export const Title = styled.h3`
    width: 33%;
    font-size: 20px;
    color: ${theme.colors.text};
    font-weight: 400;
    line-height: 1.2em;
    margin: 0;
`;

export const Div2 = styled.div`
    width: 33%;
    display: flex;
    flex-direction: column;
    gap: 8px;

    h1{
        font-size: 56px;
        color: ${theme.colors.text};
        font-weight: 400;
        line-height: 1.2em;
        margin: 0;
    }

    h2{
        font-size: 20px;
        color: ${theme.colors.gray100};
        font-weight: 400;
        line-height: 1.4em;
        margin: 0;
        margin-bottom: 20px;
    }
`;