'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import TransactionForm from '@/components/ui/TransactionForm';

export default function Home() {
  const [transactions, setTransactions] = useState([]);

  const fetchData = async () => {
    const res = await axios.get('/api/transactions');
    setTransactions(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="p-4 max-w-xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Finance Tracker</h1>
      <TransactionForm onAdded={fetchData} />

      <ul className="space-y-2">
        {transactions.map((t: any) => (
          <li
            key={t._id}
            className="border rounded p-2 flex justify-between items-center"
          >
            <div>
              <p className="font-medium">{t.description}</p>
              <p className="text-sm text-gray-500">{new Date(t.date).toDateString()}</p>
            </div>
            <span className="text-right font-semibold text-blue-600">
              ₹{t.amount}
            </span>
          </li>
        ))}
      </ul>
    </main>
  );
}
