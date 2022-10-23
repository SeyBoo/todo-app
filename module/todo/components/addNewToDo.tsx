import React, {
	FormEvent,
	FunctionComponent,
	useCallback,
	useState,
} from 'react';
import { useAppDispatch } from '../../../common/hooks/useStore';
import { addNewTodo } from '../store/thunk';

const AddNewToDo: FunctionComponent = () => {
	const [todo, setTodo] = useState('');
	const dispatch = useAppDispatch();

	const handleCreateNewTodo = useCallback(
		async (e: FormEvent<HTMLFormElement>) => {
			e.preventDefault();

			if (todo == '') {
				return;
			}

			try {
				await dispatch(addNewTodo(todo));
				setTodo('');
			} catch (e) {
				console.error(e);
			}
		},
		[dispatch, setTodo, todo]
	);

	return (
		<form
			onSubmit={(e) => handleCreateNewTodo(e)}
			className="flex p-4 gap-4 bg-[#fff] dark:bg-[#25273D] rounded-lg shadow-md"
		>
			<div
				className="w-7 h-7 border border-[#979797] rounded-full bg-[#fff] dark:bg-[transparent] dark:border-[#393A4B]"
			></div>
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
