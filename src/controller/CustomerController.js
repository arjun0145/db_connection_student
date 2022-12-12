import { StatusCodes } from "http-status-codes";
import { Customer } from "../model/customer.js";

 export async function CustomerControl (req,res) 
{

    try {
        var customerdetail = new Customer(req.body) 
        var  SaveCustomerDetail = await customerdetail.save()
        res.status(StatusCodes.OK).json(SaveCustomerDetail)
        
    } catch (error) {

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({massage:"sometthig galat hua "})
        
    }

}