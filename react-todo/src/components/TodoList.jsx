import React, { useState } from 'react'
import AddTodoForm from './AddTodoForm';

function TodoList() {

    const [todos,setTodos] = useState([
        {id:1,title:'complete advanced react projects' , completed:true},
        {id:2,title:'Go for a walk' , completed:false},
        {id:3,title:'go to the gym' , completed:false},
    ]);

    const toggelTodo = (id)=>{
        setTodos(
            todos.map(todo=>
            {
                console.log(todos)
                return todo.id===id ? {...todo,completed:!todo.completed} : todo
            }
            )
        )
    }

    const addTodo = (text)=>{
        if(text)
        setTodos([...todos,{id:Date.now(),title:text,completed:false}])
    }

    const deleteTodo = (id) =>{
        setTodos(todos.filter(todo=>todo.id!==id))
    }

  return (
    <>
        <AddTodoForm addTodo={addTodo}/>
        <h3>My Todos</h3>
        <ul>
        {todos.map(todo=>{
            
            return (
                
                    <li key={todo.id}>
                        <input type="checkbox"
                        id={todo.id}
                        checked={todo.completed}
                            onChange={()=>toggelTodo(todo.id)}
                        />
                        <label htmlFor={todo.id}>{todo.title}</label>
                        <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
                    </li>
            )
        })}
        </ul>
        
    </>
  )
}

export default TodoList