import { Children } from "react"
import Header from "../Header/Header"
import SideLeft from "../SideLeft/SideLeft"
import SideRight from "../SideRight/SideRight"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <SideLeft />
      <main>
        {children}
      </main>
      <SideRight />
    </>
  )
}

export default Layout
