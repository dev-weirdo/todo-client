import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Task = ({ task }) => {
  const navigate = useNavigate()
  const { _id, title, desc } = task

  const handleEdit = id => {
    navigate(`/tasks/${id}`)
  }
  const handleTaskComplete = id => {
    const sendTask = { title, desc }

    fetch('https://tragically-bunnyhug-07537.herokuapp.com/completedTasks', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(sendTask)
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          toast.success('Task completed!')
        }
      })

    fetch(`https://tragically-bunnyhug-07537.herokuapp.com/tasks/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
  }

  return (
    <div className='card w-96 md:w-80 lg:w-96 mx-auto bg- shadow-xl'>
      <div className='card-body'>
        <h2 className='card-title justify-center'>{title}</h2>
        <p className='text-justify'>{desc}</p>
        <div className='card-actions justify-around items-center pt-3'>
          <div>
            <input
              on
              type='checkbox'
              id='complete'
              name='complete'
              onClick={() => handleTaskComplete(_id)}
            />
            <label className='text-lg' htmlFor='complete'>
              {' '}
              Completed?
            </label>
          </div>
          <button
            onClick={() => handleEdit(_id)}
            className='btn bg-[#041C32] text-gray-100 hover:bg-white hover:text-[#041C32]'
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  )
}

export default Task
