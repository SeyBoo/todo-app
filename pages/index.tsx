import type { NextPage } from "next";
import React from "react";
import ItemsList from "../module/todo/component/itemsList";
import BaseLayout from "../common/layout/baseLayout";
import StatusFilter from "../module/todo/component/statusFilter";
import AddNewToDo from "../module/todo/component/addNewToDo";

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
