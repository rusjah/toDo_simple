import React from 'react'

function Form({handlerFunction}) {
    
  return (
    <form className="card-body lg:px-[50vh] md:px-[30vw]" onSubmit={handlerFunction}>
    <div className="form-control flex flex-row relative">
      <input type="date" name="date" id="date" className='absolute left-1 h-full w-5'/>
      <input type="time" name="time" id="time" className='absolute left-7 h-full w-8' />
      <input type="text" placeholder=" Todo" name="note" className="input input-bordered w-full pl-20" required />
      <input type='submit' value={'Add'} className="btn bg-orange-300 absolute right-1" />
    </div>
  </form>
  )
}

export default Form