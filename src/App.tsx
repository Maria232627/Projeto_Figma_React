import { ComponentFooter, ComponentHeader } from "./components";
import { PageHome, PageList } from "./pages";
import { GlobalStyle, Main } from "./styles/GlobalStyle";
import { Dispatch, SetStateAction, useState } from "react";

export interface IPage {
  setPage: Dispatch<SetStateAction<number>>
}
export function App() {
  const [page, setPage] = useState(1)
  let component
  switch (page) {
    case 1:
      component = <PageHome />
      break;
    case 2:
      component = <PageList />
      break;
    default:
      component = <PageHome />
      break;
  }
  return (
    <>
      <GlobalStyle />
      <ComponentHeader setPage={setPage} />
      <Main>
        {component}
      </Main>
      <ComponentFooter />
    </>
  )
}