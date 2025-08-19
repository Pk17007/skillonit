import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// // import './index.css'
import './components/dark/dark.css'
import Todo from './components/Todo'
// import Counter from './components/Counter'

// import Grid from './components/tail/Grid'
import Dark from './components/dark/Dark'
import Quiz from './components/quiz/Quiz'
import Stopwatch from './components/UseEffect/Stopwatch'
import SW2 from './components/UseEffect/SW2'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Grid></Grid> */}
    {/* <Todo/> */}
    {/* <Dark></Dark> */}
  {/* <Todo2></Todo2> */}
    {/* <Counter></Counter> */}
    {/* <Quiz></Quiz> */}
    <Stopwatch></Stopwatch>

    <SW2></SW2>


  </StrictMode>,
)
