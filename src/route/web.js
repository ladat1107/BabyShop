import express from "express";
import userController from "../controllers/userController";
import allCodeController from "../controllers/allCodeController";
import categoryController from "../controllers/categoryController";
require("dotenv").config();

let router = express.Router();

let initWebRoutes = (app) => {

    router.post("/api/login", userController.handleLogin);
    router.get(`/api/get-user`, userController.getUser);
    router.post("/api/create-new-user", userController.handleCreateUser);
    router.get("/api/delete-user", userController.handleDeleteUser);
    router.put("/api/update-user", userController.hanldeUpdateUser);

    // router.get("/api/get-all-code", allCodeController.getAllCode);

    router.get("/api/get-sub-category", categoryController.getSubCategory);
    router.get("/api/get-all-category", categoryController.getAllCategory);
    router.get("/api/get-parent-category", categoryController.getParentCategory);



    return app.use("/", router);
}

module.exports = initWebRoutes;