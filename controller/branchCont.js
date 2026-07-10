import { addBranch } from "../repository/branch.js";
 
export const addBranchController = async (req,res)=>{
      const {branch_name,branch_manager,branch_location,operating_time}=req.body
      try {
        const addBranchResult = await addBranch(req.body);
                     
                    return res.status(201).json({
              message: "Branch created successfully",
              data: addBranchResult
            });
      } catch (error) {
         console.error("registration error:", error);
        return res.status(500).json({
      message: "Error creating branch contact developers to resove issue",
      error: error.message})
      }
}