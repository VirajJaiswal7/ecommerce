import express from "express"
import { addToCart, getUserCart, updateCart } from "../controllers/cart.controller.js"
import { isAuthenticate } from "../middleware/isAuthenticate.js"

export const cartRoute = express.Router()

cartRoute.get("/get",isAuthenticate, getUserCart)
cartRoute.post('/add',isAuthenticate, addToCart)
cartRoute.put("/update",isAuthenticate, updateCart)