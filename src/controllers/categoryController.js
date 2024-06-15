import categoryService from "../services/categorySevice";

let getSubCategory = async (req, res) => {
    let parentId = req.query.parentId;
    if (parentId) {
        let subCategory = await categoryService.getSubCategoryService(parentId);
        return res.status(200).json({
            errCode: subCategory.errCode,
            message: subCategory.message,
            data: subCategory.data,
        })
    } else {
        return res.status(404).json({
            errCode: 404,
            message: "not found",
        })
    }

}

let getAllCategory = async (req, res) => {
    let category = await categoryService.getAllCategoryService();
    return res.status(200).json({
        errCode: category.errCode,
        message: category.message,
        data: category.data,
    })
}

let getParentCategory = async (req, res) => {
    let category = await categoryService.getParentCategoryService();
    return res.status(200).json({
        errCode: category.errCode,
        message: category.message,
        data: category.data,
    })
}

module.exports = {
    getSubCategory: getSubCategory,
    getAllCategory: getAllCategory,
    getParentCategory: getParentCategory,
    
}