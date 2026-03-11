import { createConfig, http } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import { injected, metaMask, coinbaseWallet } from 'wagmi/connectors'




export const config = createConfig({
    chains: [mainnet, sepolia],
    connectors: [
        injected(),
        metaMask(),
        coinbaseWallet({ appName: 'Cryone Presale' }),
    ],
    transports: {
        [mainnet.id]: http(),
        [sepolia.id]: http("https://sepolia.infura.io/v3/74dfe1e3de534ba39f2a5152882fb241"),
    },
})
