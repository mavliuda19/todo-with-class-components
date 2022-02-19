import { Component } from 'react'
import './TodoItem.css'

class TodoItem extends Component {
	render() {
		return (
			<div className='todo-item'>
				<ul>
					{this.props.todos.map((todo) => {
						return (
                            <div key={todo.id} >
                                  <li
								className={`${
									todo.complete ? 'completed' : 'item'
								}`}	
							>	
									<input
                                    type='checkbox'
									id={todo.id}
									onClick={this.props.CompleteHandler}
								/>
								<span className='text'>{todo.text}</span>
								
								<span className='date'>{todo.date}</span>
							
								<button
								className='btn'
									id={todo.id}
									onClick={this.props.deleteHandler.bind(this)}
								>
									Delete
								</button>
							</li>
                            </div>
						)
					})}
				</ul>
			</div>
		)
	}}
export default TodoItem
