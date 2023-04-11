const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");

// === GENEARTE NEW CLIENT
const botClient = new Client({
  qrMaxRetries: 1,
  authTimeoutMs: 60000,
  authStrategy: new LocalAuth({
    dataPath: "./.auth",
  }),
  puppeteer: {
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--aggressive-cache-discard",
      "--disable-cache",
      "--disable-application-cache",
      "--disable-offline-load-stale-cache",
      "--disk-cache-size=0",
    ],
  },
});

botClient.on("qr", (qr: string) => {
  qrcode.generate(qr, { small: true });
});

botClient.on("ready", () => {
  console.log("Client is ready!");
});

export default botClient;
