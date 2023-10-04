import styled from "styled-components";
import { theme } from "../../styles/Theme";

export const Container = styled.section`
    width: 100vw;
    height: 20vh;
    margin: 80px 0;
    display: flex;
    align-items: center;
    overflow: hidden;

    div.slider{
        display: flex;
        align-items: center;
        height: 100%;
        min-width: fit-content;
        white-space: nowrap;

        div.content{
            display: flex;
            align-items: center;
            gap: 56px;
            width: fit-content;
            min-width: fit-content;

            span{
                font-size: 15vh;
                color: ${theme.colors.white};
                font-weight: 400;
                width: fit-content;
                min-width: fit-content;
                font-family: "Tobias";
            }

            img{
                width: auto;
                height: 60px;
                
                &.logo2{
                    margin-right: 56px;
                }
            }
        }
    }
`;