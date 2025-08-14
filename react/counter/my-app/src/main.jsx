import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// // import './index.css'
import './components/dark/dark.css'
import Todo from './components/Todo'
import Grid from './components/tail/Grid'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Grid></Grid>
    {/* <Todo/> */}
    {/* <Dark></Dark> */}
  </StrictMode>,
)
