import React, { useEffect, useState } from 'react'

const CompletedTasks = () => {
  const [cTask, setCTask] = useState([])

  useEffect(() => {
    fetch('https://tragically-bunnyhug-07537.herokuapp.com/completedTasks')
      .then(res => res.json())
      .then(data => setCTask(data))
  }, [cTask])
  return (
    <div className='min-h-screen mx-auto'>
      <h1 className='text-3xl font-light text-center p-5 tracking-wider underline uppercase'>
        Completed Task List
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-7 py-5'>
        {cTask?.map(task => (
          <div
            key={task._id}
            className='card w-96 md:w-80 lg:w-96 mx-auto bg- shadow-xl'
          >
            <div className='card-body'>
              <h2 className='card-title justify-center'>{task?.title}</h2>
              <p className='text-justify'>{task?.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CompletedTasks
