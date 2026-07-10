import sqlQuery from "../database/sb.config.js";

export const addBranch = async (input)=>{
    try {
         const insertbranch = await sqlQuery `INSERT INTO "branch" ("branch_name","branch_manager","branch_location","operating_time")
        VALUES (
        ${input.branch_name},
        ${input.branch_manager},
        ${input.branch_location},
        ${input.operating_time}
        )
        RETURNING *
     
        `
        return insertbranch[0]
    } catch (error) {
        
   console.error("DB Error:", error);
  throw error;
    }

}