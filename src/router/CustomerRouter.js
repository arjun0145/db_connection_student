import express  from "express"
import { CustomerControl } from "../controller/CustomerController.js"
const CustomerRouter = express.Router()
CustomerRouter.post('/customer',CustomerControl)

export default CustomerRouter; 