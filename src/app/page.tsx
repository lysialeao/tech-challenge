"use client";

import { useState } from "react";

import { AddTransactionForm } from "./components/AddTransactionForm";
import { TransactionList } from "./components/TransactionList";
import { AccountBalance } from "./components/AccountBalance";
import { ITransaction } from "./types/transaction";

export default function Home() {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  const addTransaction = (newTransaction: ITransaction) => {
    setTransactions((previousTransactions) => [
      ...previousTransactions,
      newTransaction,
    ]);
    console.log("Transação adicionada!");
  };

  return (
    <div className="min-h-screen w-full flex flex-col">
      <div className="w-full">
        <AccountBalance transactions={transactions} />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center gap-6">
        <AddTransactionForm addTransaction={addTransaction} />
        <TransactionList transactions={transactions} />
      </div>
    </div>
  );
}
