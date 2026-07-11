import express from "express"
export const memberRoute = express.Router()
export const adminRoute = express.Router()
export const addBranchRoute = express.Router()
export const membershipRoute = express.Router()
export const paymentRoute = express.Router()

import { memberController,getAllMembersCont } from "../controller/memberCont.js"

memberRoute.post("/",memberController);
memberRoute.get("/",getAllMembersCont);




//  Admin routes 

import { adminController, getAllAdminsCont} from "../controller/adminCont.js"

adminRoute.post("/",adminController)
adminRoute.get("/",getAllAdminsCont)



// branch routes

import { addBranchController } from "../controller/branchCont.js"
addBranchRoute.post("/",addBranchController)

// membership routes

import { membershipController, getAllMembershipsCont } from "../controller/membershipCont.js"
membershipRoute.post("/",membershipController)
membershipRoute.get("/",getAllMembershipsCont)

// payment routes
import { paymentController } from "../controller/paymentCont.js"
paymentRoute.post("/",paymentController)
