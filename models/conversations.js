import mongoose from "mongoose";

const { Schema, model, Types } = mongoose;

const MessageSchema = new Schema(
  {
    role: { type: String, enum: ["user", "ai"], required: true },
    content: { type: String, required: true },
    timestamp: { type: Date, required: true },
  },
  { _id: false } // No need for an extra `_id` for each message
);

const conversationSchema = new Schema(
  {
    userId: { type: String, required: true },
    title: { type: String, required: true },
    messages: { type: [MessageSchema], default: [] },
    isActive: { type: Boolean, required: true, default: true },
  },
  { timestamps: true, versionKey: false }
);

const ConversationModel = model("Conversation", conversationSchema);

export { ConversationModel };
