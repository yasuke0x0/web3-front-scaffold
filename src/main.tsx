import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import AppRouting from "./routing/AppRouting.tsx"

import "@rainbow-me/rainbowkit/styles.css"
import "./main.scss"

const container = document.getElementById("root")

if (container) {
     createRoot(container).render(
          <BrowserRouter>
               <AppRouting />
          </BrowserRouter>
     )
}
