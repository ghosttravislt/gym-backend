import postgres from "postgres"
import dotenv from "dotenv"
dotenv.config()

const connectionString = process.env.DATABASE_URL
const sqlQuery = postgres(connectionString)

 try {
    await sqlQuery`SELECT 1`;
  console.log("Supabase connection established");
 } catch (error) {
    console.log("error connectiong to supabase");
 }

 export default sqlQuery