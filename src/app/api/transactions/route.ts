// src/app/api/transactions/route.ts
import { connectDB } from '@/lib/mongodb';
import Transaction from '@/models/Transaction';
import { NextResponse } from 'next/server';

export async function GET() {
  await connectDB();
  const transactions = await Transaction.find().sort({ date: -1 });
  return NextResponse.json(transactions);
}

export async function POST(request: Request) {
  const body = await request.json();
  await connectDB();
  const transaction = await Transaction.create(body);
  return NextResponse.json(transaction);
}
