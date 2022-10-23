import React, { FunctionComponent, useCallback, useState } from 'react';
import { useAppDispatch } from '../../../common/hooks/useStore';
import { loadActiveTodo, loadCompletedTodo, loadTodos } from '../store/thunk';

const StatusFilter: FunctionComponent = () => {
	const dispatch = useAppDispatch();
	const buttonDefaultStyle = 'text-[#9495A5] dark:text-[#5B5E7E]';
	const activeButtonStyle = 'text-[#3A7CFD]';
	const [activeFilter, setActiveFilter] = useState('all');

	const handleLoadAll = useCallback(
		async (name) => {
			try {
				await dispatch(loadTodos());
				setActiveFilter(name);
			} catch (e) {
				console.error(e);
			}
		},
		[dispatch]
	);

	const handleLoadActiveTodo = useCallback(
		async (name) => {
			try {
				await dispatch(loadActiveTodo());
				setActiveFilter(name);
			} catch (e) {
				console.error(e);
			}
		},
		[dispatch]
	);

	const handleLoadCompletedTodo = useCallback(
		async (name) => {
			try {
				await dispatch(loadCompletedTodo());
				setActiveFilter(name);
			} catch (e) {
				console.error(e);
			}
		},
		[dispatch]
	);

	return (
		<div className="bg-[#fff] p-4 rounded-lg shadow-md dark:bg-[#25273D]">
			<div className="flex justify-between max-w-[50%] m-auto">
				<button
					className={
						activeFilter === 'all' ? activeButtonStyle : buttonDefaultStyle
					}
					onClick={() => handleLoadAll('all')}
				>
					All
				</button>
				<button
					className={
						activeFilter === 'active' ? activeButtonStyle : buttonDefaultStyle
					}
					onClick={() => handleLoadActiveTodo('active')}
				>
					Active
				</button>
				<button
					className={
						activeFilter === 'completed' ? activeButtonStyle : buttonDefaultStyle
					}
					onClick={() => handleLoadCompletedTodo('completed')}
				>
					Completed
				</button>
			</div>
		</div>
	);
};

export default StatusFilter;
