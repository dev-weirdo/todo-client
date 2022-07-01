import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const TaskEdit = () => {
  const { id } = useParams()

  const [task, setTask] = useState([])

  useEffect(() => {
    fetch(`https://tragically-bunnyhug-07537.herokuapp.com/tasks/${id}`)
      .then(res => res.json())
      .then(data => {
        setTask(data)
      })
  }, [id])

  const handleTaskEdit = e => {
    e.preventDefault()

    const title = e.target.title.value
    const desc = e.target.desc.value

    const uTask = { title, desc }

    fetch(`https://tragically-bunnyhug-07537.herokuapp.com/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(uTask)
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          toast.success('Task updated!')
        }
      })
  }

  return (
    <div className='p-5 min-h-screen w-full flex items-center justify-center'>
      <div className='w-full'>
        {/* <div className='card w-96 md:w-80 lg:w-3/4 mx-auto bg- shadow-xl my-7'>
          <div className='card-body'>
            <h2 className='card-title justify-center'>{data?.title}</h2>
            <p className='text-justify'>{data?.desc}</p>
          </div>
        </div> */}
        <h1 className='uppercase text-center text-2xl font-light'>Edit Task</h1>
        <div className='py-5 md:pt-12'>
          <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl mx-auto'>
            <form onSubmit={handleTaskEdit} className='card-body'>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Title</span>
                </label>
                <input
                  type='text'
                  placeholder='Task Title'
                  className='input input-bordered'
                  name='title'
                  autoComplete='off'
                  defaultValue={task?.title}
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Description</span>
                </label>
                <textarea
                  defaultValue={task?.desc}
                  type='text'
                  placeholder='Task Description'
                  className='border-gray-300 border rounded-lg p-3 outline-gray-300 text-justify'
                  rows='7'
                  name='desc'
                  autoComplete='off'
                />
              </div>
              <div className='form-control mt-6'>
                <button className='btn bg-[#041C32] text-gray-100 hover:bg-white hover:text-[#041C32]'>
                  UPDATE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskEdit
