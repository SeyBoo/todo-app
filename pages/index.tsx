import type {NextPage} from 'next'
import React from "react";
import ItemsList from "../module/todo/component/itemsList";
import BaseLayout from "../common/layout/baseLayout";

const Home: NextPage = () => {
  return (
      <BaseLayout>
         <p>Hello World!</p>
      </BaseLayout>
  );
}

export default Home
