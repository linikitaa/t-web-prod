import { createRoot } from 'react-dom/client'
import './app/styles/index.scss'
import { App } from './app/App'
import { BrowserRouter } from 'react-router'
import { ThemeProvider } from './app/providers/ThemeProvider/ui/ThemeProvider'
const root = createRoot(document.getElementById('root'))

root.render(
  <ThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
)
