import { TodoBackend } from "../index";
import { Todo } from "../../../../common/types/todo.interface";
import { dummyData } from "./dummy-data";

let todoDummy = dummyData;

export default class DummyTodo implements TodoBackend {
	async loadTodo(): Promise<Todo[]> {
		return todoDummy;
	}

	async removeTodo(uuid: string): Promise<Todo[]> {
		const todos = todoDummy.filter((todo) => todo.uuid !== uuid);
		todoDummy = todos;
		return todos;
	}

	async changeTodoStatus(currentTodo: Todo): Promise<Todo[]> {
		const todos = todoDummy.filter((todo) => todo.uuid !== currentTodo.uuid);
		const newTodo: Todo = {
			uuid: currentTodo.uuid,
			completed: !currentTodo.completed,
			content: currentTodo.content,
		};

		todos.push(newTodo);
		todoDummy = todos;

		return todos;
	}

	async clearCompleted(): Promise<Todo[]> {
		const todos = todoDummy.filter((todo) => !todo.completed);

		todoDummy = todos;

		return todos;
	}

	async addNewTodo(content: string): Promise<Todo[]> {
		const newTodo: Todo = {
			content,
			uuid: "",
			completed: false,
		};

		todoDummy = [...todoDummy, newTodo];
		return todoDummy;
	}
}
