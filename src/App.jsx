import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { config } from './.config.ts'
import ConnectWallet from './components/ConnectWallet'
import CheckBalance from './components/CheckBalance'
import Transaction from './components/Transaction'
import './App.css'

const queryClient = new QueryClient()

function App() {

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}> 
    <div className="app">
      <div className="background-effects">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="floating-particles"></div>
      </div>
      
      <div className="container">
        <header className="header">
          <div className="logo-section">
            <div className="logo-icon">⚡</div>
            <h1 className="title">
              <span className="title-main">ETH</span>
              <span className="title-accent">Wallet</span>
            </h1>
          </div>
          <p className="subtitle">
            Modern Ethereum wallet adapter with seamless blockchain interaction
          </p>
        </header>

        <div className="components-stack">
          <ConnectWallet
          />
          
          <CheckBalance  />
          
          <Transaction  />
        </div>

        <footer className="footer">
          <div className="footer-content">
            <p>Powered by Ethereum blockchain technology</p>
            <div className="footer-links">
              <span>🔒 Secure</span>
              <span>⚡ Fast</span>
              <span>🌍 Decentralized</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
    </QueryClientProvider> 
  </WagmiProvider>
  )
}

export default App
