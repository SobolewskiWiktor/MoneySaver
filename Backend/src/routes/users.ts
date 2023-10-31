import { PrismaClient } from "@prisma/client";
import express, { Router } from "express";
const bcrypt = require('bcrypt');

const prisma: PrismaClient = new PrismaClient();
const router: Router = express.Router();

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.post("/login", async (req,res) => {
   try
   {
       const getPassword = await prisma.users.findUnique({
        where:{
            login: String(req.body),
        },
        select:
        {
            passowrd: true, 
        }
       })
       let match = await bcrypt.compare(req.body, getPassword)

       if(match)
       {
        res.status(200).json({login:'approved'})
       }
       else
       {
        res.status(500).json({login:'deny'})
       }
   }
   catch(err)
   {
    res.status(500).json(err)
   }
})

router.post("/register", async (req,res) => {
    try
    {
        let password = bcrypt.hash(req.body.password)

        const adder = await prisma.users.create({
            data:{
                login: String(req.body.login),
                passowrd: String(password),
                name: String(req.body.name),
                surname: String(req.body.surname),
                mail: String(req.body.mail)
            }
        })

        res.status(200).json(adder)
    }
    catch(err)
    {
        res.status(500).json(err)
    }
})

router.post('/update/:login', async (req,res) => {
    try
    {
        let updater = await prisma.users.update({
            where:
            {
                login: String(req.params.login)
            },
            data: req.body
        })
        
        res.status(200).json(updater)
    }
    catch(err)
    {
        res.status(500).json(err)
    }
})

router.get("/getdata/:login", async (req,res) => {
    try
    {
        const getter = await prisma.users.findUnique({
            where:
            {
                login: String(req.params.login)
            },
            select:
            {
              name: true,
              surname: true,
              mail: true,
              login: true,
            }
        })
      
        res.status(200).json(getter)
    }
    catch(err)
    {
        res.status(500).json(err)
    }
} )
module.exports = router;