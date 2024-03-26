import { useEffect, useState } from 'react'

function App() {
  const [timer, setTimer] = useState(0)
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timerId;
    if(isRunning){
      timerId = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }
    return () => {
      clearInterval(timerId);
    };
  }, [isRunning, timer])

  const formatTimer = (secs) => {
    const minutes = Math.floor(secs / 60);
    const remainingSeconds = secs % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`
  }

  const reset = () => {
    setTimer(0)
    setIsRunning(false);
  } 
    

  return (
    <div className='app'>
        <h1>Stopwatch</h1>
        <p>Time: {formatTimer(timer)}</p>
        <div className='btn-container'>
        <button 
        onClick={()=> setIsRunning(!isRunning)}
        >{isRunning ? "Stop" : "Start"}</button>
        <button 
        onClick={reset}>Reset</button>
        </div>
    </div>
  )
}

export default App
