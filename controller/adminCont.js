import {resgisterAdamin,getAllAdmins} from "../repository/admin.js";

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

 export const getAllAdminsCont = async (req,res)=>{
    const result = await getAllAdmins();
    try {
        return res.status(200).json({
            message: "Admins fetched successfully",
            data: result
        });
    } catch (error) {
        console.error("fetching error:", error);
        return res.status(500).json({
            message: "Error fetching admins contact developers to resolve issue",
            error: error.message
        });
    }
}