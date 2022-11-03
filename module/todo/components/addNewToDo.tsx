import React, { FormEvent, FunctionComponent, useState } from 'react';
import { useAppDispatch } from '../../../common/hooks/useStore';
import { addNewTodo } from '../store/thunk';

const AddNewToDo: FunctionComponent = () => {
	const dispatch = useAppDispatch();
	const [todo, setTodo] = useState('');

	const handleCreateNewTodo = async () => {
		try {
			await dispatch(addNewTodo(todo));
		} catch (e) {
			console.error(e);
		}
	};

	const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (todo == '') {
			return;
		}

		handleCreateNewTodo().then(() => setTodo(''));
	};

	return (
		<form
			onSubmit={(e) => handleSubmitForm(e)}
			className="flex p-4 gap-4 bg-[#fff] dark:bg-[#25273D] rounded-lg shadow-md"
		>
			<button
				type="submit"
				className="w-7 h-7 border border-[#979797] rounded-full bg-[#fff] dark:bg-[transparent] dark:border-[#393A4B]"
			></button>
			<input
				className="placeholder-[#9495A5] bg-[transparent] dark:placeholder-[#767992] dark:text-[#767992]"
				type="text"
				placeholder="Create a new todo..."
				value={todo}
				onChange={(e) => setTodo(e.target.value)}
			/>
		</form>
	);
};

export default AddNewToDo;
