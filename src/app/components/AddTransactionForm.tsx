"use client";

import { useState } from "react";
import { ITransaction } from "../types/transaction";

interface AddTranscationFormProps {
  addTransaction: (transaction: ITransaction) => void;
}

const initialTransaction: ITransaction = {
  id: Date.now(),
  date: new Date().toISOString().split("T")[0],
  amount: 0,
  description: "",
  type: "credito",
};

export const AddTransactionForm = ({
  addTransaction,
}: AddTranscationFormProps) => {
  const [newTransaction, setNewTransaction] =
    useState<ITransaction>(initialTransaction);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTransaction(newTransaction);

    setNewTransaction({
      id: Date.now(),
      date: new Date().toISOString().split("T")[0],
      amount: 0,
      description: "",
      type: "credito",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-2xl p-6 w-full max-w-md mx-auto flex flex-col gap-4"
    >
      <h2 className="text-xl font-semibold text-gray-800">Nova transação</h2>

      {/* Descrição */}
      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-600">Descrição</label>
        <input
          type="text"
          value={newTransaction.description}
          onChange={(e) =>
            setNewTransaction({
              ...newTransaction,
              description: e.target.value,
            })
          }
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Ex: Mercado"
        />
      </div>

      {/* Valor */}
      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-600">Valor</label>
        <input
          type="number"
          value={newTransaction.amount}
          onChange={(e) =>
            setNewTransaction({
              ...newTransaction,
              amount: Number(e.target.value),
            })
          }
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="0.00"
        />
      </div>

      {/* Tipo */}
      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-600">Tipo</label>
        <select
          value={newTransaction.type}
          onChange={(e) =>
            setNewTransaction({
              ...newTransaction,
              type: e.target.value as "credito" | "debito",
            })
          }
          className="border border-gray-300 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="credito">Crédito</option>
          <option value="debito">Débito</option>
        </select>
      </div>

      {/* Botão */}
      <button
        type="submit"
        className="mt-2 bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition"
      >
        Adicionar
      </button>
    </form>
  );
};
