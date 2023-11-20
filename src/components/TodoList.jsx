import React from 'react'
import Todo from './Todo'

function TodoList({list,del}) {
  return (
    <div className=' lg:px-[16vw] md:px-[30vw] pt-[10vh]'>
        <div className='flex justify-between gap-6 flex-wrap'>
            {list.map(el => <Todo key={el.id} todo={el} delTodo={del}/>)}
        </div>
    </div>
  )
}

export default TodoList