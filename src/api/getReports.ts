import express from "express";
import MessageResponse from "../interfaces/MessageResponse";
import { loadReportData } from "../utils/utils";

const router = express.Router();

router.get<{}, MessageResponse>("/", (req, res) => {
  const getReports = loadReportData();

  res.json({
    message: "Success",
    status: 200,
    data: getReports,
    errors: [],
  });
});

export default router;
