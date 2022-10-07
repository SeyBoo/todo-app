import {TodoBackend} from "../index";
import {Todo} from "../../../../common/types/todo.interface";
import {dummyData} from "./dummy-data";

let todoDummy = dummyData;

export default class DummyTodo implements TodoBackend {
  async loadTodo(): Promise<Todo[]> {
    return todoDummy;
  }
}
