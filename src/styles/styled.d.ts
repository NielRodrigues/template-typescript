import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius?: string

    colors: {
      primary: string
      text: string
      
      white: string
      background: string
      gray700: string
      gray900: string
    }
  }
}
