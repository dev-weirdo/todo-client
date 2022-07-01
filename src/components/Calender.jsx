import React from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

const Calender = () => {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='w-96 bg-slate-300 p-5 rounded-lg space-y-5'>
        <h1 className='text-3xl underline font-light text-center'>Calendar</h1>
        <Calendar></Calendar>
      </div>
    </div>
  )
}

export default Calender
