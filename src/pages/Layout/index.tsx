import { Outlet } from "react-router-dom"
import { ComponentHeader } from "../../components/index"
import { ComponentFooter } from "../../components/index"

export function Layout() {
  return (
    <>
      <ComponentHeader />
     
        <Outlet />
      
      <ComponentFooter />
    </>
  )
}