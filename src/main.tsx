import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ContextProvider from './Context/Context.provider.tsx'
import { BrowserRouter, Route, Routes } from "react-router";


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ContextProvider>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </ContextProvider>,
  </BrowserRouter>
)
