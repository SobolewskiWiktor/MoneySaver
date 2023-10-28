import { PrismaClient } from "@prisma/client";
import express, { Router } from "express";

const prisma: PrismaClient = new PrismaClient();
const router: Router = express.Router();

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.get("/", async (req, res) => {
    res.status(200).json(await prisma.users.findMany()); 
})

module.exports = router;