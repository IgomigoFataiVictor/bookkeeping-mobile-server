import mongoose from "mongoose";

const { Schema, model, Types } = mongoose;

const transactionSchema = new Schema(
    {
      category: { type: String, required: true },
      date: { type: String, required: true },
      status: { type: String, required: true },
      topLevelCategory: { type: String, required: true },
      type: { type: String, enum: ["CREDIT", "DEBIT"], required: true },
      accountId: { type: String, required: true },
      userId: { type: Types.ObjectId, ref: "User", required: true },
      accountGuid: { type: String, required: true },
      amount: { type: Number, required: true },
      currencyCode: { type: String, required: true },
      description: { type: String, required: true },
      guid: { type: String, required: true },
      transactionId: { type: String, required: true },
      isExpense: { type: Boolean, required: true },
      isIncome: { type: Boolean, required: true },
      memo: { type: String, required: false },
      originalDescription: { type: String, required: true },
      memberGuid: { type: String, required: true },
      userGuid: { type: String, required: true },
      metadata: { type: Object, required: false },
      isDeleted: { type: Boolean, required: true, default: false },
    },
    { timestamps: true, collection: "transactions" }
  );
  
  const TransactionModel = model("Transaction", transactionSchema);
  
  export { UserModel, TransactionModel, VerificationMethod, AccountType };
  