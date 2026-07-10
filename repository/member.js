import sqlQuery from "../database/sb.config.js";

export const registerMember = async(input)=>{
   try {  const result = await sqlQuery `INSERT INTO "member" ("first_name","last_name","email","password","age","contact","location","dob","gender","health_condition","avatar")
        VALUES (
        ${input.first_name},
        ${input.last_name},
        ${input.email},
        ${input.password},
        ${input.age},
        ${input.contact},
        ${input.location},
        ${input.dob},    
        ${input.gender},    
        ${input.health_condition},    
        ${input.avatar} 
        )

         RETURNING *
     `
     return result[0]

    } 
    
    catch (error) {
   
   console.error("DB Error:", error);
  throw error;
    }
}