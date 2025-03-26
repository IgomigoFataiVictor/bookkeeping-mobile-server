import mongoose from "mongoose";

const { Schema, model, Types } = mongoose;

const TokenType = {
  REFRESH_TOKEN: "refreshToken",
  INITIATE_SIGNUP_OTP: "initiateSignupOtp",
  FORGOT_PASSWORD_OTP: "forgotPasswordOtp",
  SIGNUP_FLOW_TOKEN: "signupFlowToken",
  LOGIN_OTP: "loginOtp",
};

const tokenSchema = new Schema(
  {
    userId: { type: Types.ObjectId, ref: "User", required: true },
    token: { type: String, required: true, unique: true },
    expiresAt: { type: Date, required: true },
    type: { type: String, enum: Object.values(TokenType), required: true },
    userAgent: { type: String },
  },
  { timestamps: true, versionKey: false }
);

const TokenModel = model("Token", tokenSchema);

export { TokenModel, TokenType };
