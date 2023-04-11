import express from "express";
import MessageResponse from "../interfaces/MessageResponse";
import bot from "../bot";

const router = express.Router();

router.post<{}, MessageResponse>("/", (req, res) => {
  const body: any = req?.body;

  // === initial
  const receiver = `${body?.receiver}@c.us`;

  const messageTemplate = `Your OTP is ${body?.otp}!`;

  bot.sendMessage(receiver, messageTemplate);

  res.json({
    message: "Success",
    status: 200,
    data: "Your otp is successfully sended!",
    errors: [],
  });
});

export default router;
