import db from "../models/index"

let getSubCategoryService = async (parentId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Category.findAll({
                where: {
                    parentId: parentId
                }
            })
            if (data) {
                resolve({
                    errCode: 0,
                    message: "OK",
                    data: data
                })
            } else {
                resolve({
                    errCode: 1,
                    data: null
                })
            }
        } catch (err) {
            reject({
                errCode: 1,
                message: "Get category failed",
                data: null
            })
        }
    })

}
let getAllCategoryService = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Category.findAll()
            if (data) {
                resolve({
                    errCode: 0,
                    message: "OK",
                    data: data
                })
            } else {
                resolve({
                    errCode: 1,
                    message: "Get all category failed",
                    data: null
                })
            }
        } catch (err) {
            reject({
                errCode: 1,
                message: "Get all category failed",
                data: null
            })
        }
    })
}
let getParentCategoryService = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Category.findAll({
                where: {
                    parentId: null
                }
            })
            if (data) {
                resolve({
                    errCode: 0,
                    message: "OK",
                    data: data
                })
            } else {
                resolve({
                    errCode: 1,
                    message: "Get parent category failed",
                    data: null
                })
            }
        } catch (err) {
            reject({
                errCode: 1,
                message: "Get parent category failed",
                data: null
            })
        }
    })
}

module.exports = {
    getSubCategoryService: getSubCategoryService,
    getAllCategoryService: getAllCategoryService,
    getParentCategoryService: getParentCategoryService,
}