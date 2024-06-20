import productService from "../services/productService";

let getProduct = async (req, res) => {
    let cateId = req.query.cateId;
    if (cateId) {
        let product = await productService.getProductService(cateId);
        if (product) {
            return res.status(200).json({
                errCode: product.errCode,
                message: product.message,
                data: product.data,
            })
        } else {
            return res.status(404).json({
                errCode: 404,
                message: "not found",
            })
        }

    } else {
        return res.status(404).json({
            errCode: 404,
            message: "not found",
        })
    }
}

module.exports = {
    getProduct: getProduct,
}