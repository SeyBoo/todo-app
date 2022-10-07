import {Todo} from "../../../common/types/todo.interface";

interface TodoState {
  todo: null | Todo[];
}

const initialState: TodoState = {
  todo: null,
}

export default initialState;
