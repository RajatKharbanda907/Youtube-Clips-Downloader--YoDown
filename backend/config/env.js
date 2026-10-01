const dotenv = require("dotenv")
const path = require("path")
dotenv.config({
    path:path.resolve(__dirname,`../.env.${process.env.NODE_ENV || "development"}`)

})

console.log("environment variables loaded successfully")
console.log(process.env.PORT)
