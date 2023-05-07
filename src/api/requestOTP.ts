import express from "express";
import MessageResponse from "../interfaces/MessageResponse";
import { botClient_Max, botClient_May } from "../bot";
import { saveReportData, selectClient } from "../utils/utils";

const router = express.Router();

router.post<{}, MessageResponse>("/", (req, res) => {
  const body: any = req?.body;

  // === initial
  const receiver = `${body?.receiver}@c.us`;

  const messageTemplate = `Your OTP is ${body?.otp}!`;

  // ==== SELECT CLIENT TO SEND OTP
  const selectedClient: string = selectClient();

  // == SELECTED CLIENT
  if (selectedClient == "MAX") {
    botClient_Max
      .sendMessage(receiver, messageTemplate)
      .then(() => {
        saveReportData(selectedClient, "SUCCESS", receiver, body.otp);
      })
      .catch((err: any) => {
        saveReportData(selectedClient, "FAILED", receiver, body.otp);
      });
  } else {
    botClient_May
      .sendMessage(receiver, messageTemplate)
      .then(() => {
        saveReportData(selectedClient, "SUCCESS", receiver, body.otp);
      })
      .catch((err: any) => {
        saveReportData(selectedClient, "FAILED", receiver, body.otp);
      });
  }

  // === SEND CALLBACK
  res.json({
    message: "Success",
    status: 200,
    data: {
      clientId: selectedClient,
      message: "Your OTP successfully sent!",
      receiver: receiver,
    },
    errors: [],
  });
});

export default router;
