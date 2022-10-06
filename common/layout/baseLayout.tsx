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
        <main>
          {children}
        </main>
      </>
  )
}

export default BaseLayout;
