import {Todo} from "../../../common/types/todo.interface";

export interface TodoBackend {
  loadTodo() : Promise<Todo[]>
}

let todoBackendInstance : TodoBackend | undefined = undefined;

export async function getTodoBackend(): Promise<TodoBackend> {
  if (todoBackendInstance === undefined) {
    const mod = await import('./backends/' + 'dummy');
    todoBackendInstance = new mod.default() as TodoBackend;
  }
  return todoBackendInstance;
}
