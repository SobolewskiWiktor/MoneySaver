import { PrismaClient } from "@prisma/client";
import express, { Router } from "express";

const prisma: PrismaClient = new PrismaClient();
const router: Router = express.Router();

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.get("/:userId", async (req, res) => {
  try {
    const getter = await prisma.banks.findMany({
      where: {
        userID: Number(req.params.userId),
      },
    });

    res.status(200).json(getter);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:userId/:status", async (req, res) => {
  try {
    const getter = await prisma.banks.findMany({
      where: {
        userID: Number(req.params.userId),
        status: String(req.params.status),
      },
    });

    res.status(200).json(getter);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/create", async (req, res) => {
  try {
    const creater = await prisma.banks.create({ data: req.body });

    res.status(200).json(creater);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/update/:bankId", async (req, res) => {
  try {
    const updater = await prisma.banks.update({
      where: {
        id: Number(req.params.bankId),
      },
      data: req.body,
    });

    res.status(200).json(updater);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
