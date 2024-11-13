import { ToastContainer } from "react-toastify"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import GlobalConstants from "./constants/GlobalConstants.ts"
import { createConfig, WagmiProvider } from "wagmi"
import { RainbowKitProvider } from "@rainbow-me/rainbowkit"
import React, { createContext, useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import TopBar from "./pages/TopBar.tsx"
import SideBar from "./pages/SideBar.tsx"

function App() {
     // States
     const [themeMode, setThemeMode] = useState<"light" | "dark">(() => {
          if (localStorage.getItem("theme")) {
               return localStorage.getItem("theme") === "dark" ? "dark" : "light"
          } else {
               return import.meta.env.VITE_APP_DEFAULT_THEME
          }
     })

     // Constants & vars
     const { DEFAULT_TOAST_CONFIG, DEFAULT_QUERY_CLIENT_CONFIG, DEFAULT_WAGMI_CONFIG } = GlobalConstants()
     const queryClient = new QueryClient(DEFAULT_QUERY_CLIENT_CONFIG)
     const wagmi = createConfig(DEFAULT_WAGMI_CONFIG)

     function handleSetTheme(mode: "dark" | "light") {
          setThemeMode(mode)

          const rootElement = window.document.documentElement
          if (mode === "dark") {
               rootElement.classList.add("dark")
               localStorage.setItem("theme", "dark")
          } else {
               rootElement.classList.remove("dark")
               localStorage.setItem("theme", "light")
          }
     }

     useEffect(() => {
          handleSetTheme(themeMode)
     }, [themeMode])

     return (
          <AppContext.Provider value={{ themeMode, handleSetTheme }}>
               <WagmiProvider config={wagmi}>
                    <QueryClientProvider client={queryClient}>
                         <RainbowKitProvider modalSize={"compact"}>
                              {/* TopBar & SideBar */}
                              <TopBar />
                              <SideBar />

                              {/* Body */}
                              <div className="min-h-screen h-screen flex flex-col p-4 sm:ml-64 bg-white dark:bg-[#111017]">
                                   <div className="p-4 mt-14 flex-grow">
                                        <Outlet />
                                   </div>
                              </div>

                              <ToastContainer {...DEFAULT_TOAST_CONFIG} />
                         </RainbowKitProvider>
                    </QueryClientProvider>
               </WagmiProvider>
          </AppContext.Provider>
     )
}

const AppContext = createContext({} as IAppContextPropsModel)

interface IAppContextPropsModel {
     themeMode: "light" | "dark"
     handleSetTheme: (mode: "dark" | "light") => void
}

export { App, AppContext }
