import mongoose from 'mongoose';

const TransactionSchema = new mongoose.Schema({
  amount: Number,
  description: String,
  date: Date,
  category: {
    type: String,
    default: 'General',
  },
});

export default mongoose.models.Transaction ||
  mongoose.model('Transaction', TransactionSchema);
