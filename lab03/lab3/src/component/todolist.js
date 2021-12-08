import React from "react";
export default class Todolist extends React.Component {
	constructor(props) {
		super(props);
		this.state = { todos: ["Read Book", "Learn ASP.Net", "Learn PHP"] };
	}
	onclickHandler = () => {
		let todolist = this.state.todos;
		this.setState({ todos: [...todolist, this.txtTodo.value] });
	};
	onDeleteclick = (index) => {
		let todolist = this.state.todos;
		let newTodolist = todolist.filter((item, i) => i !== index);
		this.setState({ todos: newTodolist });
	};
	render() {
		return (
			<>
				<input ref={(note) => (this.txtTodo = note)}></input>
				<button onclick={this.onClickHandler}>Add</button>
				<ul>
					{this.state.todos.map((value, index) => (
						<li key={index}>
							{value}
							<button onclick={() => this.onDeleteclick(index)}>
								X
							</button>
						</li>
					))}
				</ul>
			</>
		);
	}
}
