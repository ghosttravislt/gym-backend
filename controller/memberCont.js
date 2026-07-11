import { registerMember,getAllMembers } from "../repository/member.js";
 
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

  export const getAllMembersCont = async (req,res)=>{
      const result = await getAllMembers();
      try {
        return res.status(200).json({ 
          message: "Members fetched successfully",
          data: result
        });
      } catch (error) {
        console.error("fetching error:", error);
        return res.status(500).json({
          message: "Error fetching members contact developers to resove issue",
          error: error.message
        })

  }
}
