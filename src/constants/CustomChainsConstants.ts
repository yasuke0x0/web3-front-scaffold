import { defineChain } from "viem"

const CustomChainsConstants = () => {
     const srmTestnet = defineChain({
          id: 1414,
          name: "SRM Testnet",
          nativeCurrency: {
               name: "tSRM",
               symbol: "tSRM",
               decimals: 18,
          },
          rpcUrls: {
               default: {
                    http: ["https://testnet.srmchain.com"],
               },
               public: {
                    http: ["https://testnet.srmchain.com"],
               },
          },
          blockExplorers: {
               default: {
                    name: "SRM Testnet Explorer",
                    url: "https://testnet.srmscan.io/",
               },
          },
          testnet: true,
     })

     return { srmTestnet }
}

export default CustomChainsConstants
