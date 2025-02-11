import React from 'react'
import error from '../../assets/heart.png'

const Wisherror = () => {
  return (
    <div className='flex flex-col items-center min-h-[400px] pt-32'>
        <img className='w-[200px]' src={error} alt="" />
        <h2 className='text-2xl font-bold text-slate-700'>Empty</h2>
    </div>
  )
}

export default Wisherror