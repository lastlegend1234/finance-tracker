'use client';
import { useState } from 'react';
import axios from 'axios';

export default function TransactionForm({ onAdded }: { onAdded: () => void }) {
  const [form, setForm] = useState({ amount: '', description: '', date: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post('/api/transactions', {
      ...form,
      amount: Number(form.amount),
      date: new Date(form.date),
    });
    setForm({ amount: '', description: '', date: '' });
    onAdded(); // reload data
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="number"
        placeholder="Amount"
        value={form.amount}
        onChange={(e) => setForm({ ...form, amount: e.target.value })}
        className="border w-full p-2"
      />
      <input
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
        className="border w-full p-2"
      />
      <input
        type="date"
        value={form.date}
        onChange={(e) => setForm({ ...form, date: e.target.value })}
        className="border w-full p-2"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add Transaction
      </button>
    </form>
  );
}
