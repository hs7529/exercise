import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const logger = morgan("dev");
app.use(logger);

const globalRouter = express.Router();
const handleHome = (req, res) => res.send("Home my exercise");
globalRouter.get("/", handleHome);

const userRouter = express.Router();
const handleProfile = (req, res) => res.send(" this is user profile");
const handleProfileroot = (req, res) => res.send(" this is user profile root");
userRouter.get("/profile", handleProfile);
userRouter.get("/", handleProfileroot);

const travelRouter = express.Router();
const handleTravel = (req, res) => res.send(" Travel Travel");
const handleKorea = (req, res) => res.send(" this is the page of Travel Korea");
const handleJapan = (req, res) => res.send(" this is the page of Travel Japan");
const handleHongkong = (req, res) => res.send(" this is the page of Travel Hongkong");
travelRouter.get("/", handleTravel);
travelRouter.get("/korea", handleKorea);
travelRouter.get("/japan", handleJapan);
travelRouter.get("/hongkong", handleHongkong);

app.use("/", globalRouter);
app.use("/user", userRouter);
app.use("/travel", travelRouter);

const handleListening = () => console.log(`✅ Server is Running on PORT http://localhost:${PORT} 🚀🚀`);
app.listen(PORT, handleListening);

export default app;
