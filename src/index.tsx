import { createRoot } from 'react-dom/client'
import './app/styles/index.scss'
import { BrowserRouter } from 'react-router'
import { ThemeProvider } from 'app/providers/ThemeProvider/ui/ThemeProvider'
import { App } from 'app/App'
const root = createRoot(document.getElementById('root'))

root.render(
  <ThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
)
