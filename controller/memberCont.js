import { registerMember } from "../repository/member.js";
 
 export const memberController = async (req,res)=>{
        const {first_name,last_name,email,password,age,contact,location,dob,gender,health_condition,avatar}=req.body

        try {
            const controllerResult = await registerMember(req.body);
             
            return res.status(201).json({
      message: "Member resgistered successfully",
      data: controllerResult
    });
        } catch (error) {
             console.error("registration error:", error);
        return res.status(500).json({
      message: "Error registering member contact developers to resove issue",
      error: error.message})
        }
 }
