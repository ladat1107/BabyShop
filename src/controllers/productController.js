import productService from "../services/productService";

let getProduct = async (req, res) => {
    try {
        let params = "";
        for (let key in req.query)
            params = key;
        console.log(params);
        if (params && params == "cateId") {
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
            }
        } else if (params && params == "search") {
            let keyWord = req.query.search;
            if (keyWord) {
                let product = await productService.getSearchProductService(keyWord);
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
            }
        }

    } catch (e) {
        console.log("Lỗi: ", e);
        return res.status(500).json({
            errCode: 500,
            message: "Error from server",
        })
    }
}

module.exports = {
    getProduct: getProduct,
}