const fs = require("fs-extra");
const moment = require("moment");

// ==== return chosse client by minute
export const selectClient = (): string => {
  const date = new Date();
  const getTime = date.getMinutes();

  return getTime % 2 == 0 ? "MAX" : "MAY";
};

// ==== save report data
export const saveReportData = (
  client: string,
  status: string,
  receiver: string,
  otp: string
) => {
  const path = "./src/store/reports.json";

  const existingData = fs.readFileSync(path);
  const parseExistingData = JSON.parse(existingData);

  const getDateTime = moment().format();

  const reportData = {
    client: client,
    status: status,
    createdDate: getDateTime,
    receiver: receiver,
    otp: otp,
  };

  parseExistingData.push(reportData);

  const newData = JSON.stringify(parseExistingData);

  fs.writeFileSync(path, newData);
};

// ==== load report data
export const loadReportData = () => {
  const path = "./src/store/reports.json";

  const existingData = fs.readFileSync(path);
  const parseExistingData = JSON.parse(existingData);

  return parseExistingData;
};
