import sqlQuery from "../database/sb.config.js";

export const resgisterAdamin = async (input)=>{
   try {
     const results = await sqlQuery `
        INSERT INTO "admin" ("first_name","last_name","email","password","role") 
        VALUES (
         ${input.first_name},
        ${input.last_name},
        ${input.email},
        ${input.password},
        ${input.role}
        )
        RETURNING *
    `
     return results[0]
   } catch (error) {
          console.error("DB Error:", error);
  throw error;
    }
   }

   export const getAllAdmins = async()=>{
    try {
        const result = await sqlQuery `SELECT * FROM "admin"`;
        return result;}
        catch{
          console.error("DB Error:", error);
        throw error;
        }
      
  }