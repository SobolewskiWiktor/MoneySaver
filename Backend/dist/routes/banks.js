"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const express_1 = __importDefault(require("express"));
const prisma = new client_1.PrismaClient();
const router = express_1.default.Router();
router.use(express_1.default.urlencoded({ extended: true }));
router.use(express_1.default.json());
router.get("/:userId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getter = yield prisma.banks.findMany({
            where: {
                userID: Number(req.params.userId),
            },
        });
        res.status(200).json(getter);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
router.get("/getOne/:bankId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getter = yield prisma.banks.findUnique({
            where: {
                id: Number(req.params.bankId)
            }
        });
        res.status(200).json(getter);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
router.get("/:userId/:status", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getter = yield prisma.banks.findMany({
            where: {
                userID: Number(req.params.userId),
                status: String(req.params.status),
            },
        });
        res.status(200).json(getter);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
router.post("/create", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const creater = yield prisma.banks.create({ data: {
                name: String(req.body.name),
                goal: Number(req.body.goal),
                description: String(req.body.description),
                userID: Number(req.body.userID),
                status: String(req.body.status)
            }
        });
        res.status(200).json(creater);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}));
router.post("/update/:bankId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updater = yield prisma.banks.update({
            where: {
                id: Number(req.params.bankId),
            },
            data: req.body,
        });
        res.status(200).json(updater);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
module.exports = router;
