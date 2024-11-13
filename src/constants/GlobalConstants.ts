import { ToastOptions } from "react-toastify"
import { sepolia } from "viem/chains"
import { CreateConfigParameters, http } from "wagmi"
import CustomChainsConstants from "./CustomChainsConstants.ts"
import { QueryClientConfig } from "@tanstack/react-query"

const GlobalConstants = () => {
     const { srmTestnet } = CustomChainsConstants()

     const DEFAULT_TOAST_CONFIG: ToastOptions = {
          position: "bottom-left",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
     }

     const DEFAULT_QUERY_CLIENT_CONFIG: QueryClientConfig = {
          defaultOptions: {
               queries: {
                    retry: false,
                    refetchOnWindowFocus: false,
               },
          },
     }

     const DEFAULT_WAGMI_CONFIG: CreateConfigParameters = {
          chains: [sepolia],
          transports: {
               [sepolia.id]: http(),
               [srmTestnet.id]: http(),
          },
          ssr: false, // true if your dApp uses server side rendering (SSR)
     }

     return { DEFAULT_TOAST_CONFIG, DEFAULT_QUERY_CLIENT_CONFIG, DEFAULT_WAGMI_CONFIG }
}

export default GlobalConstants
