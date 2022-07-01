import React from 'react'
import { BsPlusCircleDotted } from 'react-icons/bs'
import { toast } from 'react-toastify'

const Todo = () => {
  const handleTaskAdd = e => {
    e.preventDefault()

    const title = e.target.title.value
    const desc = e.target.desc.value

    if (title.length > 0 && desc.length > 0) {
      const sendTask = { title, desc }

      fetch('https://tragically-bunnyhug-07537.herokuapp.com/tasks', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(sendTask)
      })
        .then(res => res.json())
        .then(data => {
          if (data.acknowledged) {
            toast.success('Task added!')
          }
        })
      e.target.reset()
    } else {
      toast.warning('Input cannot be empty!')
    }
  }
  return (
    <div className='p-5 min-h-screen w-full flex items-center justify-center'>
      <div className='w-full'>
        <h1 className='uppercase text-center text-2xl font-light'>
          Add new task
        </h1>
        <div className='py-5 md:pt-12'>
          <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl mx-auto'>
            <form onSubmit={handleTaskAdd} className='card-body'>
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
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Description</span>
                </label>
                <textarea
                  type='text'
                  placeholder='Task Description'
                  className='border-gray-300 border rounded-lg p-3 outline-gray-300'
                  rows='7'
                  name='desc'
                  autoComplete='off'
                />
              </div>
              <div className='mt-4 w-full flex justify-center'>
                <button
                  type='submit'
                  id='taskAddBtn'
                  className='rounded-full bg-[#041C32]  text-white hover:bg-white hover:text-black'
                >
                  <BsPlusCircleDotted className='text-4xl'></BsPlusCircleDotted>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Todo
