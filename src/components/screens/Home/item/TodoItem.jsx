import React from 'react'
import cn from 'classnames'
import Check from './Check'
import { BsTrash } from 'react-icons/bs';

const TodoItem = ({todo, changeTodo, removeTodo}) => {
  return (
    <div 
        className='
          flex 
          items-center 
          justify-between
          mb-3
          rounded-2xl bg-zinc-800
          p-4
          cursor-pointer
          hover:bg-zinc-700 transition-colors duration-100'>
      
      <button 
        onClick={() => changeTodo(todo.id)}
        className='flex items-center '>
          <Check isCompleted={todo.isCompleted}/>
          <span className={cn({'line-through': todo.isCompleted})}>{todo.title}</span>
      </button>

      <button onClick={() => removeTodo(todo.id)}>
        <BsTrash 
          size={22} 
          className='text-gray-600 hover:text-rose-500 transition-colors duration-100'
        />
      </button>
    </div>
  )
}

export default TodoItem
