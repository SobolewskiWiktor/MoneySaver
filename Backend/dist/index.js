"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
const prisma = new client_1.PrismaClient();
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use((require("cors"))());
app.use("/api/example", require("./routes/example"));
app.use("/api/user", require("./routes/users"));
app.use("/api/banks", require("./routes/banks"));
app.use("/api/operations", require("./routes/operations"));
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
