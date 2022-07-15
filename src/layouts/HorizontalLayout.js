// ** React Imports
import { Outlet } from "react-router-dom"
import Layout from "@layouts/HorizontalLayout"
import navigation from "@src/navigation/horizontal"

const HorizontalLayout = (props) => {
  return (
    <Layout menuData={navigation} {...props}>
      <Outlet />
    </Layout>
  )
}

export default HorizontalLayout
