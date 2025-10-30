import React, { useRef } from "react";
import { useSendTransaction } from "wagmi";
import { parseEther } from "viem";
import "./Transaction.css";

const Transaction = () => {
  const { data: hash, sendTransaction } = useSendTransaction();
  const toRef = useRef();
  const valueRef = useRef();

  const handleSend = async () => {
    const to = toRef.current.value.trim();
    const value = valueRef.current.value.trim();

    if (!to || !value) {
      alert("Please enter both recipient and amount.");
      return;
    }

    try {
      sendTransaction({ to, value: parseEther(value) });
    } catch (err) {
      console.error(err);
      alert("Transaction failed. Check console for details.");
    }
  };

  return (
    <div className="tx-container">
      <div className="tx-card">
        <h2 className="tx-heading">Send Transaction</h2>

        <div className="tx-inputs">
          <input
            ref={toRef}
            placeholder="Recipient Address (0x...)"
            className="tx-input"
          />
          <input
            ref={valueRef}
            placeholder="Amount in ETH"
            className="tx-input"
          />
        </div>

        <button onClick={handleSend} className="tx-btn">
          Send
        </button>

        {hash && (
          <div className="tx-hash">
            Transaction Hash:{" "}
            <a
              href={`https://etherscan.io/tx/${hash}`}
              target="_blank"
              rel="noreferrer"
            >
              {hash.slice(0, 10)}...
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Transaction;
