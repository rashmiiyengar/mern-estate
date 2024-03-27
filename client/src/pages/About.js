import React, { useState } from 'react'

const About = () => {

  const [counter,setCounter] = useState(0);

  const handleClick1=()=>{
    setCounter(counter+1)
  }
  const handleClick2=()=>{
    setCounter(counter-1)
  }
  return (

    <div className='flex flex-col max-w-lg'>
      <div className='bg-slate-400 text-center rounded-full'>
      {counter}
      </div>
      
      <button className='bg-slate-700 text-white rounded-lg m-3 p-3 hover:opacity-90' onClick={handleClick1}>
      Increment
      </button>
      
      <button className='bg-slate-700 text-white rounded-lg m-3 p-3 hover:opacity-90' onClick={handleClick2}>
        Deccrement
      </button>
      </div>
  )
}

export default About