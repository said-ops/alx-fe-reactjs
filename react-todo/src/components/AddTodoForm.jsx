import React, { useState } from 'react'

function AddTodoForm({addTodo}) {

    const [todo,setTodo] = useState('')
    const handleSubmit = (e)=>{
        e.preventDefault()
        addTodo(todo)
        setTodo('')
    }
    
  return (
    <>
        <h4>add todo</h4>
        <form action="#"
            onSubmit={e=>handleSubmit(e)}
        >
            <input type="text" 
                placeholder='add new task'
                onChange={(e)=>setTodo(e.target.value)}
                value={todo}
            />
            <button>Add Task</button>
        </form>
    </>
  )
}

export default AddTodoForm