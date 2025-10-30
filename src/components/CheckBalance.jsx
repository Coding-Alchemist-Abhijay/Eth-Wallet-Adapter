import React from "react";
import { useAccount, useBalance } from "wagmi";
import './CheckBalance.css';

const CheckBalance = () => {
  const { address, isConnected } = useAccount();
  const { data, isLoading, error } = useBalance({ address });

  return (
    <div className="check-balance-container">
      <div className="balance-card">
        <h3 className="card-title">Wallet Balance</h3>
        <div style={{ marginBottom: "1rem" }}>
          {isConnected && address ? (
            <p className="wallet-address">
              {address.slice(0, 6)}...{address.slice(-4)}
            </p>
          ) : (
            <p className="wallet-address">Connect your wallet</p>
          )}
        </div>
        <div className="balance-display" style={{ fontSize: '1.5rem', fontWeight: 'bold', minHeight: 32 }}>
          {isLoading ? (
            "Loading..."
          ) : error ? (
            "Unable to load"
          ) : isConnected && data ? (
            <>
              {data.formatted} {data.symbol}
            </>
          ) : (
            <span style={{
              color: "#FFD700",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: "1.2rem",
              letterSpacing: "0.02em",
              textShadow: "0 0 8px rgba(255,215,0,0.3)"
            }}>
              Wallet Not Connected
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckBalance;
