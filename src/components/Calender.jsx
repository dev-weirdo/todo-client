import React from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

const Calender = () => {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='w-96 bg-slate-300 p-5 rounded-lg'>
        <Calendar></Calendar>
      </div>
    </div>
  )
}

export default Calender