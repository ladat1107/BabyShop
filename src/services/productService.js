import { Op } from "sequelize";
import db from "../models/index";
let getProductService = async (cateId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let product = await db.Product.findAll({
                where: {
                    cateId: cateId,
                }
            })
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
            reject({
                errCode: -1,
                message: "Get product failed",
                data: null
            });
        }
    })
}
let getSearchProductService = async (keyWord) => {
    return new Promise(async (resolve, reject) => {
        try {
            let product = await db.Product.findAll({
                where: {
                    productName: {
                        [Op.like]: `%${keyWord}%`,
                    },
                }
            })
            if (product && product.length > 0) {
                console.log("Product : ", product)
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
            reject(e);
        }
    })
}

module.exports = {
    getProductService: getProductService,
    getSearchProductService: getSearchProductService,
}