import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactProvider from './(FSD)/app/ReactProvider'
import { Provider } from 'react-redux'
import { store } from './store/store'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ReactProvider />
    </Provider>
  </StrictMode>
)