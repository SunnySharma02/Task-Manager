import axios from "axios"

function TaskCard({title, isComplete, getTasks, taskId}) {

  const handleComplete = async ()=> {
    await axios.patch(`https://task-manager-blush-eta.vercel.app/tasks/${taskId}/edit`, {
      isComplete: true 
    })
    getTasks()
  }

  const handleDelete = async ()=> {
    await axios.delete(`https://task-manager-blush-eta.vercel.app/tasks/${taskId}/delete`)
    getTasks()
  }

  return (
    <div className="bg-green-700 rounded-md w-4/5 my-2 flex mx-auto py-1">
        <h3 className={`text-amber-100 text-lg px-1 ${isComplete && 'line-through'}`}>{title}</h3>
        <div className="ms-auto">
            <button className="text-lg px-1" onClick={()=>handleComplete(taskId)}>✅</button>
            <button className="text-lg px-1" onClick={()=>handleDelete(taskId)}>🗑️</button>
        </div>
    </div>
  )
}

export default TaskCard
