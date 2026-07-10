import { insertPayment } from "../repository/payment.js";

export const paymentController = async (req,res)=>{
        const {payment_typ,member_id,amount,receipts,payment_date}=req.body
       try {
         const paymentResult = insertPayment(req.body)
          
            return res.status(201).json({
      message: " payment made successfully",
      data: controllerResult
    });
       } catch (error) {
         console.error("payment error:", error);
        return res.status(500).json({
      message: "Error making payment contact developers to resove issue",
      error: error.message})

       }
}