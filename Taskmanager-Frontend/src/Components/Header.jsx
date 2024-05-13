import axios from 'axios'

function Header({setTasks}) {

  const handleSubmit = async (e) => {
    e.preventDefault()

    const title = e.target[0].value
    // console.log(title)

    const response = await axios.post("https://task-manager-blush-eta.vercel.app/task/new", {title})

    setTasks(prev => [...prev, response.data])
  }

  return (
    <>
    <h1 className="text-center my-5 text-4xl font-extrabold text-green-900">My Task Manager</h1>
    <div className="flex">
        <form onSubmit={handleSubmit} className=" mx-auto" method="post">
            <input className="outline-none bg-transparent border-b-2 border-black text-black px-1 py-0.5" type="text" name="task" id="task" placeholder="Add task"/>
            <button className="bg-black text-white px-4 py-0.5 rounded-md">ADD</button>
        </form>
    </div>
    </>
    
  )
}

export default Header
