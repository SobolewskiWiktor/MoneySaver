import { PrismaClient } from "@prisma/client";
import express, { Router } from "express";
import { json } from "stream/consumers";
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const prisma: PrismaClient = new PrismaClient();
const router: Router = express.Router();

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.post("/login", async (req,res) => {
   try
   {
       const getPassword = await prisma.users.findUnique({
        where:{
            login: String(req.body.login),
        },
        select:
        {
            passowrd: true, 
        }
       })
       if(getPassword?.passowrd == null)
       {
        return res.status(500).json({login:'No user'})
       }

       let match = await bcrypt.compare(req.body.password, getPassword?.passowrd)


       if(match)
       {
        const secretKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
        const token = jwt.sign(req.body, secretKey);
        return res.status(200).json({login:'approved', token: token})
       }
       else
       {
        return res.status(500).json({login:'deny'})
       }


   }
   catch(err)
   {
    res.status(500).json(err)
   }
})

router.post("/veryfiToken", async (req,res) => {
    try
    {
        const token = req.body.token;
        const secretKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
        jwt.verify(token, secretKey, (err, decoded) => {
            if (err) {
              console.log('Weryfikacja nie powiodła się:', err);
              res.status(500).json(err)
            } else {
              console.log('Token zweryfikowany. Zdekodowane dane:', decoded);
              res.status(200).json(decoded)
            }
        })
    }
    catch(err)
    {
        res.status(500).json(err)
    }
})
router.post("/register", async (req,res) => {
    try
    {   
        const password = req.body.password;
        const saltRounds = 10; 
        bcrypt.genSalt(saltRounds,  async (err, salt) => {
            bcrypt.hash(password, salt,  async (err, hash) => {
                const adder = await prisma.users.create({
                    data:{
                        login: String(req.body.login),
                        passowrd: String(hash),
                        name: String(req.body.name),
                        surname: String(req.body.surname),
                        mail: String(req.body.mail)
                    }
                })
            console.log(hash);
            });
          });
         

        res.status(200).json("done")
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