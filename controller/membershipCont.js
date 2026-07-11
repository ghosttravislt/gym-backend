import { membership,getAllMemberships } from "../repository/membership.js";
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
  export const getAllMembershipsCont = async (req,res)=>{
    const result = await getAllMemberships();
    try {
        return res.status(200).json({
            message: "Memberships fetched successfully",
            data: result
        });
    } catch (error) {
        console.error("fetching error:", error);
        return res.status(500).json({
            message: "Error fetching memberships contact developers to resolve issue",
            error: error.message
        });
    }
  }