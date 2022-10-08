import React, {FunctionComponent, PropsWithChildren} from "react";
import Nav from "../components/Nav";

export const BaseLayout: FunctionComponent<PropsWithChildren> = (
    {
      children,
    }
) => {
  return (
      <>
        <Nav/>
        <main className="flex flex-col -mt-20 relative max-w-[90%] m-auto gap-5">
          {children}
        </main>
      </>
  )
}

export default BaseLayout;
