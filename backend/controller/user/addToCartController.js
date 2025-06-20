const addToCartModel = require("../../model/cartProduct")

const addToCartController = async (req, res) => {
    try {
        const { productId } = req?.body
        const currentUser = req.userId

        const IsProductAvailable = await addToCartModel.findOne({ productId })

        if (IsProductAvailable) {
            return res.json({
                message: "Already Exits in Cart",
                success: false,
                error: true
            })

        }
        const payload = {
            productId: productId,
            quantity: 1,
            userId: currentUser
        }

        const newAddToCart = new addToCartModel(payload)
        const saveProduct = await newAddToCart.save()

        res.json({
            data: saveProduct,
            message: "Product Added in Cart",
            success: true,
            error: false
        })

    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        })
    }
}
module.exports = addToCartController
