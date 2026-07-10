import sqlQuery from "../database/sb.config.js";

export const membership = async (input)=>{

 try {
       const results = sqlQuery `
        INSERT INTO "membership" ("member_id","membership_type","memebership_status","branch_id","start_date","end_date","renewed")

        VALUES (
        ${input.member_id},
        ${input.membership_type},
        ${input.membership_status},
        ${input.branch_id},
        ${input.start_date},
        ${input.end_date},
        ${input.renewed}
        )
    
    `

     results[0]
 } catch (error) {
     console.error("DB Error:", error);
  throw error;
 }


}