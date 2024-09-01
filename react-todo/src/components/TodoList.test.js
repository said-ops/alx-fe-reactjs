import {render,screen,fireEvent} from '@testing-library/react'
import TodoList from '../components/TodoList'
import React from 'react'


//Write Initial Render Test:

test('initial render',()=>{
    render(<TodoList/>)
    expect(screen.getByText('add todo')).toBeInTheDocument()
    expect(screen.getByText('Add Task')).toBeInTheDocument()
    expect(screen.getByText('My Todos')).toBeInTheDocument()
    expect(screen.getByText('complete advanced react projects')).toBeInTheDocument()
    expect(screen.getByText('Go for a walk')).toBeInTheDocument()
    expect(screen.getByText('go to the gym')).toBeInTheDocument()
})