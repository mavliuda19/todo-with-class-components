import { Component } from 'react'
import React from 'react'
import TodoList from './components/TodoList'
import './App.css'
import TodoItem from './components/TodoItem'

class App extends Component {
	constructor() {
		super()
		this.state = {
			todos: [],
		}
   
	}

	addNewTodo = (todo) => {
		{this.setState({ todos : [todo, ...this.state.todos] })	}
	}
	componentDidMount(){
		
		this.setState({todos: JSON.parse(localStorage.getItem('todos')) || []})
	}
	componentDidUpdate(prevProps, prevState){
		if(prevState!==this.state.todos){
			localStorage.setItem('todos', JSON.stringify(this.state.todos))
		}
	}

	deleteHandler = (e) => {
		const filteredtodos = this.state.todos.filter((todo) => {
			return todo.id !== e.target.id
		})
		this.setState({ todos: filteredtodos })
		console.log(filteredtodos)
	}

	completeHandler = (e) => {
		const todos = [...this.state.todos]
		todos.map((el) => {
			if (el.id === e.target.id) {
				el.complete = !el.complete
			}
			return el
		})

		this.setState({ todos })
	}
	render() {
		return (
			<div className='App'>
				<h1>My Todo List</h1>
				<TodoList
					addNewTodo={this.addNewTodo.bind(this)}
				/>
				<TodoItem
					todos={this.state.todos}
					deleteHandler={this.deleteHandler}
					CompleteHandler={this.completeHandler}
				/>
			</div>
		)
	}
}
export default App
