import express from "express"
import authMiddleware from "../middleware/auth.js"

import { placeOrder, verifyOrders, userOrders } from "../controllers/orderController.js"

const orderRouter = express.Router();

//create endpoint
orderRouter.post("/place",authMiddleware,placeOrder);
orderRouter.post("/verify",verifyOrders);
orderRouter.post("/userorders",authMiddleware,userOrders);

export default  orderRouter;