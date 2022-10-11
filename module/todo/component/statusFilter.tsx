import React, { FunctionComponent, useCallback, useState } from "react";
import { useAppDispatch } from "../../../common/hooks/useStore";
import { loadActiveTodo, loadCompletedTodo, loadTodos } from "../store/thunk";

const StatusFilter: FunctionComponent = () => {
	const dispatch = useAppDispatch();

	const handleLoadAll = useCallback(async () => {
		try {
			await dispatch(loadTodos());
		} catch (e) {
			console.error(e);
		}
	}, [dispatch]);

	const handleLoadActive = useCallback(async () => {
		try {
			await dispatch(loadActiveTodo());
		} catch (e) {
			console.error(e);
		}
	}, [dispatch]);

	const handleLoadCompleted = useCallback(async () => {
		try {
			await dispatch(loadCompletedTodo());
		} catch (e) {
			console.error(e);
		}
	}, [dispatch]);

	interface filterItem {
		name: string;
		active: boolean;
		action: () => void;
	}

	const filter: filterItem[] = [
		{
			name: "All",
			active: true,
			action: () => handleLoadAll(),
		},
		{
			name: "Active",
			active: false,
			action: () => handleLoadActive(),
		},
		{
			name: "Completed",
			active: false,
			action: () => handleLoadCompleted(),
		},
	];

	const renderButton = (item: filterItem, index: number) => {
		let defaultStyling = "";

		if (item.active) {
			defaultStyling = defaultStyling + "";
		}

		return (
			<button className={`${defaultStyling}`} onClick={item.action} key={index}>
				{item.name}
			</button>
		);
	};

	return (
		<div className="bg-[#fff] p-4 rounded-lg shadow-md">
			<div className="flex justify-between max-w-[50%] m-auto">
				{filter.map((item, index) => renderButton(item, index))}
			</div>
		</div>
	);
};

export default StatusFilter;
