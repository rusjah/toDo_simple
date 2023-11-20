import React from 'react'

function Todo({todo, delTodo}) {
  return (
    <div className="card w-96  shadow-xl border-2 border-orange-300">
        <div className="card-body realtiv">
            <h2 className="card-title">To Do</h2>
            <p className='text-[10px] font-bold text-amber-950'>Due Date: {todo.data} {todo.time}</p>
            <p className='pt-4 text-red-950'>{todo.note}</p>
            <button onClick={() => {delTodo(todo.id)}} className="btn font-bold text-[1.2vw] text-yellow-950 w-2 h-2 rounded-full absolute top-5 right-5">X</button>
        </div>
    </div>
  )
}

export default Todo