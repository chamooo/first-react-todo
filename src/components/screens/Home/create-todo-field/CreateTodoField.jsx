import React, { useState } from 'react'
import {IoMdAddCircle} from 'react-icons/io';

const CreateTodoField = ({ setTodos }) => {
    
    const [title, setTitle] = useState('');

    const addTodo = (title) => {
        setTodos(prev => [
            {
                id: new Date,
                title,
                isCompleted: false
            },  
            ...prev,
        ])
        setTitle('');
    }
    
    return (
      <div className="flex items-center justify-between rounded-2xl mb-4 relative">
        <input
          placeholder="Add a task..."
          className="bg-transparent border-zinc-800 border-2 w-full rounded-xl py-3 px-4 outline-none"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={(e) => { 
                if(e.key === "Enter" && title) {
                    addTodo(title);
                    e.target.value = '';
                }
            }
          }
        />
        <button>
            <IoMdAddCircle size={30} className="absolute top-3 right-4 text-pink-400 hover:rotate-90 transition-all ease-out duration-500"/>
        </button>
      </div>
    );
}

export default CreateTodoField
