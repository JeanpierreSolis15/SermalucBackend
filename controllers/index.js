const Router = require("express");
const { notificationRouter } = require("./api/notification");

const apiRouter = Router();

apiRouter.use("/notifications", notificationRouter);

module.exports = apiRouter;
