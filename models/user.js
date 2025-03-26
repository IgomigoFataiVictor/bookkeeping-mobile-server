import mongoose from "mongoose";

const { Schema, model, Types } = mongoose;

const VerificationMethod = {
  EMAIL: "EMAIL",
  PHONE: "PHONE_NUMBER",
};

const AccountType = {
  BUSINESS: "BUSINESS",
  PERSONAL: "PERSONAL",
};

const userSchema = new Schema(
  {
    firstName: { type: String, required: false, default: null },
    lastName: { type: String, required: false, default: null },
    accountType: { type: String, enum: Object.values(AccountType), required: false, default: null },
    companyName: { type: String, required: false, default: null },
    companyWebsite: { type: String, required: false, default: null },
    companyCategory: { type: String, required: false, default: null },
    businessStructure: { type: String, required: false, default: null },
    email: { type: String, required: false, unique: true },
    phoneNumber: { type: String, required: false, unique: true },
    password: { type: String, required: false },
    isVerified: { type: Boolean, required: true, default: false },
    verificationMethod: { type: String, enum: Object.values(VerificationMethod), required: false },
    isEmailVerified: { type: Boolean, required: false, default: false },
    isPhoneVerified: { type: Boolean, required: false, default: false },
    financialGoal: { type: String, required: false, default: null },
    mxUsers: {
      type: [
        {
          id: String,
          mxUserId: String,
          memberId: String,
          email: String,
          isDisabled: Boolean,
          metadata: Object,
          createdAt: Date,
        },
      ],
      default: [],
    },
  },
  { timestamps: true, versionKey: false }
);

const UserModel = model("User", userSchema);

export { UserModel, VerificationMethod, AccountType };
