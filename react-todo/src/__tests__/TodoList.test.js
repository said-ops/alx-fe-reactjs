import {render,screen,fireEvent} from '@testing-library/react'
import TodoList from '../components/TodoList'
import React from 'react'


//initial render test:

test('initial render',()=>{
    render(<TodoList/>)
    expect(screen.getByText('add todo')).toBeInTheDocument()
    expect(screen.getByText('Add Task')).toBeInTheDocument()
    expect(screen.getByText('My Todos')).toBeInTheDocument()
    expect(screen.getByText('complete advanced react projects')).toBeInTheDocument()
    expect(screen.getByText('Go for a walk')).toBeInTheDocument()
    expect(screen.getByText('go to the gym')).toBeInTheDocument()
})

//tetsing adding todos

test('add a todo',()=>{
    render(<TodoList/>)
    const addBtn = screen.getByText('Add Task')
    const input = screen.getByPlaceholderText('add new task')

    fireEvent.change(input,{target:{value:'Play Guitar'}})
    fireEvent.click(addBtn)

    expect(screen.getByText('Play Guitar'))
})

//test to toggel first todo

test('toggle checkbox' ,()=>{
    render(<TodoList/>)
    const checkBox = screen.getByLabelText('complete advanced react projects')
    expect(checkBox.checked).toBe(true)

    fireEvent.click(checkBox)
    expect(checkBox.checked).toBe(false)

    fireEvent.click(checkBox)
    expect(checkBox.checked).toBe(true)
})

//test to delete the first element 
test('delete todos' ,()=>{

    render(<TodoList/>)
    const deleteBtns = screen.queryAllByText('Delete',{selector:'button'})
    const deleteBtn = deleteBtns[0]
    fireEvent.click(deleteBtn)
    expect(screen.queryByText('complete advanced react projects')).not.toBeInTheDocument()
})
 