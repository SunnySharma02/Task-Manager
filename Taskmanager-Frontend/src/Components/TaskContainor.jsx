import TaskCard from "./TaskCard"

function TaskContainor({tasks, getTasks}) {

  

  return (
    <>
    <div className="mt-5">
        <h2 className="text-center font-semibold">Your Tasks</h2>
        <div>
          {
            tasks.map(ele => (
              <div key={ele._id}>
                <TaskCard taskId={ele._id} title={ele.title} isComplete={ele.isComplete} getTasks={getTasks}/>
              </div>
            ))
          }
        </div>
    </div>
    </>
  )
}

export default TaskContainor