import { where } from "sequelize";
import db from "../models/index";
let getProductService = async (cateId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let product = await db.Product.findAll({
                where: {
                    cateId: cateId,
                }
            })
            console.log("Check product: ", product);
            if (product && product.length > 0) {
                resolve({
                    errCode: 0,
                    message: "OK",
                    data: product,
                })
            } else {
                resolve({
                    errCode: 1,
                    message: "Not fault data",
                    data: null,
                })
            }
        } catch (e) {
            console.log("Lỗi: ", e);
            reject({
                errCode: -1,
                message: "Get product failed",
                data: null
            });
        }
    })
}

module.exports = {
    getProductService: getProductService
}