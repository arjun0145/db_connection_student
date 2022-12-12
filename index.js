import express from 'express'
import { ConfigureDb } from './src/config/configdb.js'
import CustomerRouter from './src/router/CustomerRouter.js'

const app = express()
app.use(express.json())
app.use(CustomerRouter)
ConfigureDb()
app.listen(5200,()=>{

console.log("server is running at  " +  5200);

})