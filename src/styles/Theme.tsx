import React, { ReactNode } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'


export const theme: DefaultTheme = {
  colors: {
    primary: "#2950FF",
    text: "#FFFFFF",
    white: '#FFFFFF',
    background: '#000000',
    gray100: '#CCCCCC',
    gray700: '#333333',
    gray900: '#1A1A1A',
  },
}

interface ThemeProps {
  children: ReactNode
}

export function Theme({ children }: ThemeProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
