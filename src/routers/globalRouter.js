import express from "express";
const globalRouter = express.Router();

globalRouter.get("/", handleHome);

export default globalRouter;
