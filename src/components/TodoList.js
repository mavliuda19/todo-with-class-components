import React, { Component } from 'react'
import './TodoList.css'
class TodoList extends Component {
	constructor() {
		super()
		this.state = {
			value: '',
		}
	}

	handleInput = (e) => {
		this.setState({
			value: e.target.value,
		})
	}

	addTodo = (e) => {
		e.preventDefault()
		const newTodo = {
			id: Date.now().toString(),
			date: new Date().toLocaleDateString(),
			text: this.state.value,
			complete: false,
		}
		if(this.state.value===''){
			alert('type something')
			return
		}else{
			this.props.addNewTodo(newTodo)
			
		}
		this.setState({value:''})
	}

	render() {
		return (
			<div className='todo-list'>
				<input type='text' onChange={this.handleInput.bind(this)} value={this.state.value} />
				<button onClick={this.addTodo.bind(this)}>Add</button>
			</div>
		)
	}
}
export default TodoList
