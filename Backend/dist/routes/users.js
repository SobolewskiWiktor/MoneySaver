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
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const prisma = new client_1.PrismaClient();
const router = express_1.default.Router();
router.use(express_1.default.urlencoded({ extended: true }));
router.use(express_1.default.json());
router.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getPassword = yield prisma.users.findUnique({
            where: {
                login: String(req.body.login),
            },
            select: {
                passowrd: true,
            },
        });
        if ((getPassword === null || getPassword === void 0 ? void 0 : getPassword.passowrd) == null) {
            return res.status(500).json({ login: "No user" });
        }
        let match = yield bcrypt.compare(req.body.password, getPassword === null || getPassword === void 0 ? void 0 : getPassword.passowrd);
        if (match) {
            const secretKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
            const token = jwt.sign(req.body, secretKey);
            return res.status(200).json({ login: "approved", token: token });
        }
        else {
            return res.status(500).json({ login: "deny" });
        }
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
router.post("/veryfiToken", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = req.body.token;
        const secretKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
        jwt.verify(token, secretKey, (err, decoded) => {
            if (err) {
                res.status(500).json(err);
            }
            else {
                res.status(200).json(decoded);
            }
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
router.post("/register", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const password = req.body.password;
        const saltRounds = 10;
        const checklogin = yield prisma.users.findUnique({
            where: {
                login: String(req.body.login),
            }
        });
        if (checklogin == null) {
            bcrypt.genSalt(saltRounds, (err, salt) => __awaiter(void 0, void 0, void 0, function* () {
                bcrypt.hash(password, salt, (err, hash) => __awaiter(void 0, void 0, void 0, function* () {
                    const adder = yield prisma.users.create({
                        data: {
                            login: String(req.body.login),
                            passowrd: String(hash),
                            name: String(req.body.name),
                            surname: String(req.body.surname),
                            mail: String(req.body.mail),
                        },
                    });
                }));
            }));
            res.status(200).json("done");
        }
        else {
            res.status(200).json({ registerStatus: "Accout exist" });
        }
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
router.post("/update/:login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const saltRounds = 10;
        console.log(req.body);
        bcrypt.genSalt(saltRounds, (err, salt) => __awaiter(void 0, void 0, void 0, function* () {
            bcrypt.hash(String(req.body.password), salt, (err, hash) => __awaiter(void 0, void 0, void 0, function* () {
                let updater = yield prisma.users.update({
                    where: {
                        login: String(req.params.login),
                    },
                    data: {
                        passowrd: String(hash),
                        name: String(req.body.name),
                        surname: String(req.body.surname),
                        mail: String(req.body.mail),
                    }
                });
                res.status(200).json(updater);
            }));
        }));
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}));
router.get("/getdata/:login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getter = yield prisma.users.findUnique({
            where: {
                login: String(req.params.login),
            },
            select: {
                name: true,
                surname: true,
                mail: true,
                id: true,
            },
        });
        res.status(200).json(getter);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
router.get("/checkPassword/:login/:password", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getter = yield prisma.users.findUnique({
            where: {
                login: String(req.params.login)
            },
            select: {
                passowrd: true,
            }
        });
        let passwordDB = String(getter === null || getter === void 0 ? void 0 : getter.passowrd);
        let match = yield bcrypt.compare(String(req.params.password), passwordDB);
        if (match) {
            res.status(200).json("password Match");
        }
        else {
            res.status(200).json("password not Match");
        }
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
module.exports = router;
