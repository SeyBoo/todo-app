import type {NextPage} from 'next'
import React from "react";
import ItemsList from "../module/todo/component/itemsList";
import BaseLayout from "../common/layout/baseLayout";
import AddNewToDo from "../module/todo/component/addNewToDo";

const Home: NextPage = () => {
  return (
      <BaseLayout>
        <AddNewToDo />
        <ItemsList/>
      </BaseLayout>
  );
}

export default Home
