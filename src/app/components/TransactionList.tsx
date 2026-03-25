import { ITransaction } from "../types/transaction";

interface TransactionListProps {
  transactions: ITransaction[];
}

export const TransactionList = ({ transactions }: TransactionListProps) => {
  return (
    <div className="w-full max-w-md mx-auto mt-4 flex flex-col gap-3">
      {transactions.map((transaction) => (
        <div
          key={transaction.id}
          className="bg-white shadow-sm rounded-xl p-4 flex justify-between items-center"
        >
          <div className="flex flex-col">
            <span className="text-gray-800 font-medium">
              {transaction.description}
            </span>
            <span className="text-xs text-gray-400">{transaction.date}</span>
          </div>

          <span
            className={`font-semibold ${
              transaction.type === "credito" ? "text-green-600" : "text-red-500"
            }`}
          >
            {transaction.type === "credito" ? "+" : "-"} R${" "}
            {transaction.amount.toFixed(2)}
          </span>
        </div>
      ))}
    </div>
  );
};
