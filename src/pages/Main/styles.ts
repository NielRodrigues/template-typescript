import styled from 'styled-components'
import { theme } from '../../styles/Theme'

export const Container = styled.div`
  height: auto;
  min-height: 100vh;
  width: 100%;
  background-color: ${theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

