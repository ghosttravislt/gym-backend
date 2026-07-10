import sqlQuery from "../database/sb.config.js";

export const insertPayment = async (input)=>{

  try {
      const result = sqlQuery `
    INSERT INTO "payment" ("payment_typ","member_id","amount","receipts","payment_date")
    VALUES (
    ${input.payment_typ},
    ${input.member_id},
    ${input.amount},
    ${input.receipts},
    ${input.payment_date}
    
    )
    `

    result[0]
  } catch (error) {
    console.error("DB Error:", error);
  throw error;
  }
}