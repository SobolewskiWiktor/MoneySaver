import { PrismaClient } from "@prisma/client";
import express, { Router } from "express";

const prisma: PrismaClient = new PrismaClient();
const router: Router = express.Router();

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.get("/:userid/:bankid", async (req, res) => {
  try {
    const getter = await prisma.operations.findMany({
      where: {
        userID: Number(req.params.userid),
        bankID: Number(req.params.bankid),
      },
    });

    res.status(200).json(getter);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/create", async (req, res) => {
  try {
    let creater = await prisma.operations.create({
      data: req.body,
    });

    res.status(200).json(creater);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
