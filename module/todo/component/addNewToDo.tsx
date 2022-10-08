import React, {FormEvent, FunctionComponent, useCallback, useState} from "react";
import {useAppDispatch} from "../../../common/hooks/useStore";
import {addNewTodo} from "../store/thunk";
import Image from "next/image";
import IconCross from "../../../common/assets/icon-check.svg";

const AddNewToDo: FunctionComponent = () => {
  const [todo, setTodo] = useState('');
  const dispatch = useAppDispatch();

  const handleCreateNewTodo = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (todo == '') {
      return;
    }

    try {
      await dispatch(addNewTodo(todo));
      setTodo('');
    } catch (e) {
      console.error(e)
    }


  }, [dispatch, setTodo, todo])


  return (
      <form
          onSubmit={(e) => handleCreateNewTodo(e)}
          className="flex p-4 gap-4 bg-[#fff] rounded-lg shadow-md"
      >
        <div className="w-7 h-7 border rounded-full bg-[#fff]"></div>
        <input
            type="text"
            placeholder="Create a new todo..."
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
        />
      </form>
  )
}

export default AddNewToDo;
