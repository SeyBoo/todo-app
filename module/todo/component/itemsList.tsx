import React, {FunctionComponent, useEffect} from "react";
import ItemCard from "./itemCard";
import {useAppDispatch, useAppSelector} from "../../../common/hooks/useStore";
import {loadTodos} from "../store/thunk";

const ItemsList: FunctionComponent = () => {
  const todo = useAppSelector(state => state.Todo.todo);
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      try {
        await dispatch(loadTodos());
      } catch (e) {
        console.error(e)
      }
    })()
  }, []);
  return (
      <ol className="-mt-10 z-50 relative w-[90%] m-auto bg-[#fff] rounded-lg shadow-md">
        {todo?.map(todo =>
            <ItemCard
                key={todo.uuid}
                todo={todo}
            />
        )}
        <div className="flex justify-between p-5">
          <p>{todo?.filter(todo => !todo.completed).length} items left</p>
          <button>
            Clear completed
          </button>
        </div>
      </ol>
  )
}

export default ItemsList;
