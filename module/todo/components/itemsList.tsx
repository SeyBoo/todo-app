import React, { FunctionComponent, useCallback, useEffect } from 'react';
import ItemCard from './itemCard';
import { useAppDispatch, useAppSelector } from '../../../common/hooks/useStore';
import { clearCompleted, loadTodos } from '../store/thunk';

const ItemsList: FunctionComponent = () => {
	const todo = useAppSelector((state) => state.Todo.todo);
	const dispatch = useAppDispatch();

	useEffect(() => {
		(async () => {
			try {
				await dispatch(loadTodos());
			} catch (e) {
				console.error(e);
			}
		})();
	}, []);

	const handleClearCompleted = useCallback(async () => {
		try {
			await dispatch(clearCompleted());
		} catch (e) {
			console.error(e);
		}
	}, [dispatch]);

	return (
		<ol className="z-50 relative bg-[#fff] rounded-lg shadow-md dark:bg-[#25273D]">
			{todo?.map((todo) => (
				<ItemCard key={todo.uuid} todo={todo} />
			))}
			<div className="flex justify-between p-5">
				<p className="text-[#9495A5]">
					{todo?.filter((todo) => !todo.completed).length} items left
				</p>
				<button
					onClick={() => handleClearCompleted()}
					className="text-[#9495A5]"
				>
					Clear completed
				</button>
			</div>
		</ol>
	);
};

export default ItemsList;
