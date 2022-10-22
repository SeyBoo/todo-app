import { Todo } from '../../../common/types/todo.interface';

export interface TodoBackend {
	loadTodo(): Promise<Todo[]>;

	removeTodo(uuid: string): Promise<Todo[]>;

	changeTodoStatus(currentTodo: Todo): Promise<Todo[]>;

	clearCompleted(): Promise<Todo[]>;

	addNewTodo(content: string): Promise<Todo[]>;
}

let todoBackendInstance: TodoBackend | undefined = undefined;

export async function getTodoBackend(): Promise<TodoBackend> {
	if (todoBackendInstance === undefined) {
		const mod = await import('./backends/' + process.env.NEXT_PUBLIC_TODO_API_BACKEND_MODULE);
		todoBackendInstance = new mod.default() as TodoBackend;
	}
	return todoBackendInstance;
}
