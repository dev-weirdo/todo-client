import React, { useEffect, useState } from 'react'
// import { useQuery } from 'react-query'
import Task from './Task'

const Home = () => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    fetch('https://tragically-bunnyhug-07537.herokuapp.com/tasks')
      .then(res => res.json())
      .then(data => {
        setTasks(data)
      })
  }, [tasks])

  return (
    <div className='min-h-screen mx-auto'>
      <h1 className='text-3xl font-light text-center p-5 tracking-wider underline uppercase'>
        Task List
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-7 py-5'>
        {tasks?.map(task => (
          <Task key={task._id} task={task}></Task>
        ))}
      </div>
    </div>
  )
}

export default Home
