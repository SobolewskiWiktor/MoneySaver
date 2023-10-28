import express, { Express, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

const prisma = new PrismaClient()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/example", require("./routes/example"));

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});