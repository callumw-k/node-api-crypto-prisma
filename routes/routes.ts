import express from "express";
import { getMessage, postMessage } from "../controllers/messageController";

const router = express.Router();

router.get("/message", getMessage);
router.post("/message", postMessage);
router.get("/", (req, res) => {
  res.send("Hello world!");
});

export default router;
