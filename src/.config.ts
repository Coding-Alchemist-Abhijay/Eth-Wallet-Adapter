import {http, createConfig} from "wagmi"
import {base, mainnet, optimism} from 'wagmi/chains'
import {injected, metaMask, safe, walletConnect} from 'wagmi/connectors'

const projectId = 'ccb674fbcee16bb5bba3c7d1b958fb89'

export const config = createConfig({
    chains : [mainnet, base],
    connectors :[ 
    injected(),
    walletConnect({projectId}),
    metaMask(),
    safe()
    ],
    transports : {
        [mainnet.id] : http(),
        [base.id] : http(),
    },
})
