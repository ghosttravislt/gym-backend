import express from "express"
export const memberRoute = express.Router()
export const adminRoute = express.Router()
export const addBranchRoute = express.Router()
export const membershipRoute = express.Router()
export const paymentRoute = express.Router()

import { memberController } from "../controller/memberCont.js"

memberRoute.post("/",memberController)




//  Admin routes 

import { adminController } from "../controller/adminCont.js"

adminRoute.post("/",adminController)



// branch routes

import { addBranchController } from "../controller/branchCont.js"
addBranchRoute.post("/",addBranchController)

// membership routes

import { membershipController } from "../controller/membershipCont.js"
membershipRoute.post("/",memberController)

// payment routes
import { paymentController } from "../controller/paymentCont.js"
paymentRoute.post("/",paymentController)
