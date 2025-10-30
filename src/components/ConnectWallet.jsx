import React from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import "./ConnectWallet.css";

const ConnectWallet = () => {
  const { address, isConnected } = useAccount();
  const { connectors, connect } = useConnect();
  const { disconnect } = useDisconnect();

  return (
    <div className="connect-wallet-container">
      <div className="connect-wallet-card">
        <h2 className="wallet-heading">Connect Your Wallet</h2>

        {isConnected ? (
          <div className="wallet-info">
            <p className="wallet-address">
              Connected:{" "}
              <span>
                {address?.slice(0, 6)}...{address?.slice(-4)}
              </span>
            </p>
            <button className="disconnect-btn" onClick={() => disconnect()}>
              Disconnect
            </button>
          </div>
        ) : (
          <div className="wallet-buttons">
            {connectors.map((connector) => (
              <button
                key={connector.id}
                onClick={() => connect({ connector })}
                className="connect-wallet-btn"
              >
                {connector.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ConnectWallet;

