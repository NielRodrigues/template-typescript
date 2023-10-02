import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from './routes'

import { Theme } from './styles/Theme'
import { Normalize } from 'styled-normalize'
import MouseHoverProvider from './contexts/MouseHoverContext'

export default function App() {
  return (
    <BrowserRouter>
      <MouseHoverProvider>
        <Theme>
          <AppRoutes />
          <Normalize />
        </Theme>
      </MouseHoverProvider>
    </BrowserRouter>
  )
}
