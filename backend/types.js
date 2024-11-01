const zod = require('zod')

const signupSchema = zod.object({
    username : zod.string().email(),
    password : zod.string(),
    firstName  :zod.string(),
    lastName : zod.string()
})

const signinSchema = zod.object({
    username : zod.string().email(),
    password : zod.string()
})
const updateUserSchema = zod.object({
    password : zod.string().optional(),
    firstName  :zod.string().optional(),
    lastName : zod.string().optional()
})
module.exports = {
    signupSchema, signinSchema , updateUserSchema
}