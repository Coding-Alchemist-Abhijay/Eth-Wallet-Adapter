# ⚡ Eth-Wallet-Adapter  

> 🪙 A modern React + Vite Ethereum wallet adapter with wallet connection, balance check, and transaction features — wrapped in a stunning **black-and-gold UI**.

---

## 🌟 Overview  

**Eth-Wallet-Adapter** is a plug-and-play Web3 starter that makes integrating wallet connection, ETH balance display, and transaction sending dead-simple — powered by **wagmi**, **viem**, and **React**.

Built with a premium dark aesthetic (black + yellow theme), it’s perfect for modern decentralized apps, dashboards, or DeFi frontends.

---

## ✨ Features  

- 🦊 **Connect / Disconnect Wallets** via wagmi hooks  
- 💰 **Check Live ETH Balance** with one click  
- 💸 **Send Transactions** easily using `useSendTransaction`  
- ⚡ **Instant Feedback** — shows wallet address & TX hash  
- 🎨 **Sleek Animated UI** — gold hover effects, glowing cards, and motion transitions  
- 🧩 **Modular Components** — reusable `ConnectWallet`, `SendTransaction`, and `CheckBalance`  
- 🧠 **Built with Vite + React** for speed and simplicity  

---

## 🧰 Tech Stack  

| Technology | Purpose |
|-------------|----------|
| 🦄 **React (Vite)** | Frontend Framework |
| 🔗 **wagmi** | Web3 React Hooks |
| 🧮 **viem** | EVM Interaction Utility |
| 🎨 **Custom CSS (Black + Gold)** | Premium UI styling |
| 💻 **ES Modules / Modern JS** | Clean lightweight build |

---

## 🚀 Getting Started  

### 1️⃣ Clone the repository  
```bash
git clone https://github.com/Coding-Alchemist-Abhijay/Eth-Wallet-Adapter.git
cd Eth-Wallet-Adapter
```

### 2️⃣ Install dependencies  
```bash
npm install
```

### 3️⃣ Start the development server  
```bash
npm run dev
```

### 4️⃣ Build for production  
```bash
npm run build
```

---

## 🧩 Components  

### 🔐 ConnectWallet.jsx  
Handles wallet connections using **wagmi**.

```jsx
import { useConnect, useDisconnect, useAccount } from 'wagmi';

const ConnectWallet = () => {
  const { address, isConnected } = useAccount();
  const { connectors, connect } = useConnect();
  const { disconnect } = useDisconnect();

  return (
    <div className="connect-wallet-container">
      <h2>Connect Your Wallet</h2>
      {isConnected ? (
        <>
          <p>Connected: {address.slice(0, 6)}...{address.slice(-4)}</p>
          <button onClick={() => disconnect()}>Disconnect</button>
        </>
      ) : (
        connectors.map((connector) => (
          <button key={connector.id} onClick={() => connect({ connector })}>
            {connector.name}
          </button>
        ))
      )}
    </div>
  );
};
```

---

### 💸 SendTransaction.jsx  
Send ETH to any address in one click.

```jsx
import { useSendTransaction } from 'wagmi';
import { parseEther } from 'viem';

export function SendTransaction() {
  const { data: hash, sendTransaction } = useSendTransaction();

  async function sendTx() {
    const to = document.getElementById("to").value;
    const value = document.getElementById("value").value;
    sendTransaction({ to, value: parseEther(value) });
  }

  return (
    <div className="tx-container">
      <div className="tx-card">
        <h2 className="tx-heading">Send ETH</h2>
        <div className="tx-inputs">
          <input id="to" className="tx-input" placeholder="Recipient Address" required />
          <input id="value" className="tx-input" placeholder="Amount (ETH)" required />
        </div>
        <button className="tx-btn" onClick={sendTx}>Send Transaction</button>
        {hash && <div className="tx-hash">Hash: {hash}</div>}
      </div>
    </div>
  );
}
```

---

### 💰 CheckBalance.jsx  
Displays connected wallet’s ETH balance in real-time.

```jsx
import { useBalance, useAccount } from 'wagmi';

const CheckBalance = () => {
  const { address, isConnected } = useAccount();
  const { data: balance } = useBalance({ address });

  return (
    <div className="check-balance-container">
      <div className="balance-card">
        {isConnected ? (
          <>
            <h2 className="card-title">Wallet Balance</h2>
            <p className="wallet-address">{address.slice(0, 6)}...{address.slice(-4)}</p>
            <div className="balance-display">
              <h3 className="balance-number">{balance?.formatted ?? '0.00'}</h3>
              <span className="balance-currency">ETH</span>
            </div>
          </>
        ) : (
          <p>Please connect your wallet first.</p>
        )}
      </div>
    </div>
  );
};
```

---

## 🖌️ Styling (Theme Highlights)  

- **Black + Gold Palette** — a rich, elegant dark theme  
- **Glowing Borders** — yellow neon pulse around cards  
- **Hover Animations** — subtle motion + shimmer effects  
- **Smooth Typography** — *Poppins* & *Courier New* for contrast  
- **Responsive Design** — optimized for all screen sizes  

---

## 🧠 Folder Structure  

```
Eth-Wallet-Adapter/
│
├── src/
│   ├── components/
│   │   ├── ConnectWallet.jsx
│   │   ├── SendTransaction.jsx
│   │   └── CheckBalance.jsx
│   ├── styles/
│   │   ├── ConnectWallet.css
│   │   ├── Transaction.css
│   │   └── CheckBalance.css
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── package.json
└── vite.config.js
```

---

## 🧪 Future Enhancements  

✅ Add Token (ERC-20) Transfers  
✅ Display Network Name & Switcher  
✅ Add Transaction Status Updates  
✅ Integrate WalletConnect QR  
✅ Light Theme Toggle  

---

## 📜 License  
This project is **MIT Licensed** — feel free to use, modify, and share!

---

## 💛 Author  

**👨‍💻 Coding-Alchemist-Abhijay**  
> Building beautiful Web3 tools for the modern internet.  

🔗 GitHub: [Coding-Alchemist-Abhijay](https://github.com/Coding-Alchemist-Abhijay)
