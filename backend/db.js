const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://itspraskpatel:dbpass12@cluster0.xowprk8.mongodb.net/paytm")

const userSchema = new mongoose.Schema({
    username : String,
    password : String,
    firstName : String,
    lastName : String,
})

const acccountSchema = new mongoose.Schema({
    userId : String,
    username : String,
    balance : Number
})

const UserData = mongoose.model('UserData',userSchema)
const AccountData = mongoose.model('AccountData',acccountSchema)
module.exports = {
    UserData,
    AccountData
}