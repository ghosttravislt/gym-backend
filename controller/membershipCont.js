import { membership } from "../repository/membership.js";
export const membershipController = async (req,res)=>{

    const {member_id,membership_type,membership_status,branch_id,start_date,end_date,renewed}=req.body
    try {
        const membershipResults = membership(req.body)
      return res.status(201).json({
      message: "Membership resgistered successfully",
      data: membershipResults
    });
    } catch (error) {
           console.error("registration error:", error);
        return res.status(500).json({
      message: "Error registering membership contact developers to resove issue",
      error: error.message})
    }
}