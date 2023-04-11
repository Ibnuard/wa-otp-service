import express from "express";

import MessageResponse from "../interfaces/MessageResponse";
import emojis from "./emojis";
import requestOTP from "./requestOTP";

const router = express.Router();

router.get<{}, MessageResponse>("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
    status: 200,
    data: "Hallo",
    errors: [],
  });
});

router.use("/emojis", emojis);
router.use("/requestOTP", requestOTP);

export default router;
