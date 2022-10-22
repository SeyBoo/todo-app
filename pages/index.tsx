import type { NextPage } from 'next';
import React from 'react';
import ItemsList from '../module/todo/components/itemsList';
import BaseLayout from '../common/layout/baseLayout';
import StatusFilter from '../module/todo/components/statusFilter';
import AddNewToDo from '../module/todo/components/addNewToDo';

const Home: NextPage = () => {
	return (
		<BaseLayout>
			<AddNewToDo />
			<ItemsList />
			<StatusFilter />
		</BaseLayout>
	);
};

export default Home;
