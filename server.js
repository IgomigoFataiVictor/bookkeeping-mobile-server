import express from 'express';
import morgan from "morgan";
import cors from "cors";
import cookieParser from 'cookie-parser';

// Create the express app
const app = express();

// Port
const PORT = process.env.PORT || 3000;

// Test Endpoint
app.get("/", (req, res) => {
    res.status(200).json("Hello");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});