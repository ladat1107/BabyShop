import { where } from "sequelize"
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
let checkCateNameExist = async (categoryName) => {
    let cate = await db.Category.findOne({
        where: { categoryName: categoryName },
    })
    if (cate) {
        return true
    } else {
        return false
    }
}
let checkParentIdExist = async (parentId) => {
    if (!parentId) { return true }
    let cate = await db.Category.findOne({
        where: { parentId: parentId },
    })
    if (cate) {
        return true
    } else {
        return false
    }
}

let createCategoryService = async (category) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (await checkCateNameExist(category.categoryName) === false) {
                if (await checkParentIdExist(category.parentId) === true) {
                    console.log("check cate: ", category);
                    await db.Category.create({
                        categoryName: category.categoryName,
                        parentId: category.parentId,
                        categoryImage: category.categoryImage,
                        status: category.status,
                        description: category.description,
                    })
                    resolve({
                        errCode: 0,
                        message: "OK",
                    })
                } else {
                    resolve({
                        errCode: 1,
                        message: "Parent ID is not exist",
                    })
                }
            } else {
                resolve({
                    errCode: 2,
                    message: "Category name is exist",
                })
            }
        } catch (e) {
            console.log(e)
            reject({
                errCode: 500,
                message: "Error from server",
            })
        }
    })
}

module.exports = {
    getSubCategoryService: getSubCategoryService,
    getAllCategoryService: getAllCategoryService,
    getParentCategoryService: getParentCategoryService,
    createCategoryService: createCategoryService,
}