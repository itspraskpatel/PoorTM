const express = require("express")
const { authMiddleware } = require("../middleware")
const { AccountData } = require("../db")
const accRouter = express()
const mongoose = require('mongoose')

accRouter.get('/balance', authMiddleware, async(req,res)=>{

    const userId = req.userId
    //console.log(userId)

    const account = await AccountData.findOne({userId : userId})

    
    if(!account){
        res.status(404).json({status : "error" , message: "Acccount not Found"})
    }else{
        res.json({status :"sucess" , balance : account.balance })
    }
})

accRouter.post('/transfer', authMiddleware , async(req,res)=>{
    const session = await mongoose.startSession();
    const amount = req.query.amount
    session.startTransaction();

    const fromAccount = await AccountData.findOne({ userId : req.userId}).session(session)
    
    if(!fromAccount || fromAccount.balance < amount){
        await session.abortTransaction()
        return res.json({status : "error" , message : "Insufficient Funds"})
    }

    const toAccount = await AccountData.findOne({ username: req.query.to }).session(session);
    
    if(!toAccount){
        await session.abortTransaction()
        return res.status(404).json({status: "error" , message: "Receiver Account Doesn't Exists"})
    }
    const fromBalance = fromAccount.balance - amount
    const toBalance = toAccount.balance - amount
    
    //deduct
    await AccountData.updateOne({userId : req.userId},{balance : fromBalance}).session(session)
    await AccountData.updateOne({username : req.to}, {balance : toBalance}).session(session)

    // Commit the transaction
    await session.commitTransaction();
    return res.json({
        status : "sucess" , message: "Transfer successful"
    });
})



module.exports = {
    accRouter
}