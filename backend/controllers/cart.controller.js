import {User} from "../models/user.model.js"

// add products to user cart
export const addToCart = async(req, res)=>{
try {
    const {userId, itemId, size} = req.body

    const userData = await User.findById(userId)
    let cartData = await User.cartData;
    if(cartData[itemId]){
        if(cartData[itemId][size]){
            cartData[itemId][size] += 1
        }else{
            cartData[itemId][size] = 1
        }
    }else{
        cartData[itemId] = {}
        cartData[itemId][size] = 1
    }

    await User.findByIdAndUpdate(userId, {cartData})
    res.json({success:true, message:'Added to cart'})
} catch (error) {
    console.log(error)
    return res.status(500).json({
        message:"Internal server error",
        success:false
    })
}
}

// update user cart
export const updateCart = async(req, res)=>{
try {
    
} catch (error) {
    console.log(error)
    return res.status(500).json({
        message:"Internal server error",
        success:false
    })
}
}


// get user cart data
export const getUserCart = async (req, res)=>{
try {
    
} catch (error) {
    console.log(error)
    return res.status(500).json({
        message:"Internal server error",
        success:false
    })
}
}