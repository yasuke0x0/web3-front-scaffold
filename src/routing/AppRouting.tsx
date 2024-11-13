import { Navigate, Route, Routes } from "react-router-dom"
import { App } from "../App.tsx"
import Landing from "../pages/Landing.tsx"
import TopBar from "../pages/TopBar.tsx"

const AppRouting = () => {
     return (
          <Routes>
               <Route element={<App />}>
                    <Route path="/" element={<Landing />} />

                    <Route path={"*"} element={<Navigate to={ROUTE_ABSOLUTE_PATH_LANDING} />} />
               </Route>
          </Routes>
     )
}

export const ROUTE_ABSOLUTE_PATH_LANDING = "/"

export default AppRouting
