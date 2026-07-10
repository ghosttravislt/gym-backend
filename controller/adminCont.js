import {resgisterAdamin} from "../repository/admin.js";

export const adminController = async (req,res)=>{
    const {first_name,last_name,email,password,role}=req.body
    
    try {
        const adminResult = await resgisterAdamin(req.body)
             return res.status(201).json({
      message: "Admin resgistered successfully",
      data: adminResult
    });
     } catch (error) {
         console.error("registration error:", error);
        return res.status(500).json({
      message: "Error registering admin contact developers to resove issue",
      error: error.message})
     }
}