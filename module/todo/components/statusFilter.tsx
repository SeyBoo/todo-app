import React, { FunctionComponent, useCallback, useState } from 'react';
import { useAppDispatch } from '../../../common/hooks/useStore';
import {
	fetchActiveTodo,
	fetchCompletedTodo,
	fetchTodos,
} from '../store/thunk';

type filterType = 'all' | 'completed' | 'active';

const StatusFilter: FunctionComponent = () => {
	const dispatch = useAppDispatch();
	const [activeFilter, setActiveFilter] = useState<filterType>('all');

	const buttonDefaultStyle = 'text-[#9495A5] dark:text-[#5B5E7E]';
	const activeButtonStyle = 'text-[#3A7CFD]';

	const handleFetchAll = useCallback(async () => {
		try {
			await dispatch(fetchTodos());
			setActiveFilter('all');
		} catch (e) {
			console.error(e);
		}
	}, [dispatch]);

	const handleFetchActiveTodo = useCallback(async () => {
		try {
			await dispatch(fetchActiveTodo());
			setActiveFilter('active');
		} catch (e) {
			console.error(e);
		}
	}, [dispatch]);

	const handleFetchCompletedTodo = useCallback(async () => {
		try {
			await dispatch(fetchCompletedTodo());
			setActiveFilter('completed');
		} catch (e) {
			console.error(e);
		}
	}, [dispatch]);

	return (
		<div className="bg-[#fff] p-4 rounded-lg shadow-md dark:bg-[#25273D]">
			<div className="flex justify-between max-w-[50%] m-auto">
				<button
					className={
						activeFilter === 'all' ? activeButtonStyle : buttonDefaultStyle
					}
					onClick={() => handleFetchAll()}
				>
					All
				</button>
				<button
					className={
						activeFilter === 'active' ? activeButtonStyle : buttonDefaultStyle
					}
					onClick={() => handleFetchActiveTodo()}
				>
					Active
				</button>
				<button
					className={
						activeFilter === 'completed'
							? activeButtonStyle
							: buttonDefaultStyle
					}
					onClick={() => handleFetchCompletedTodo()}
				>
					Completed
				</button>
			</div>
		</div>
	);
};

export default StatusFilter;
