import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv"
import { memberRoute,adminRoute,addBranchRoute,membershipRoute,paymentRoute } from "./routes/serverRoute.js";
dotenv.config()
const app = express()
      app.use(cors())
      app.use(json())
    

    //   routing

    app.use("/api/member/register",memberRoute)
    app.use("/api/admin/register",adminRoute)
    app.use("/api/branch/add",addBranchRoute)
    app.use("/api/membership/register",membershipRoute)
    app.use("/api/payment",paymentRoute)

      



const port = 5080
app.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`);
})
