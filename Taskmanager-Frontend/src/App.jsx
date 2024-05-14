import { useEffect, useState } from "react"
import Header from "./Components/Header"
import TaskContainor from "./Components/TaskContainor"
import { dev } from '$app/environment';
import { inject } from '@vercel/analytics';
 
inject({ mode: dev ? 'development' : 'production' });

const App = () => {

  const [tasks, setTasks] = useState([])

  const getTasks = async()=>{
    const response = await fetch("https://task-manager-blush-eta.vercel.app/tasks")
    const data = await response.json()

    setTasks(data)
    // console.log({data})
  }

  useEffect(()=>{
    getTasks()
  },[])

  return (
    <>
        <Header tasks={tasks} setTasks={setTasks}/>
        <TaskContainor tasks={tasks} setTasks={setTasks} getTasks={getTasks}/>
    </>
  )
}

export default App
