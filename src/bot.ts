const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");

// === set client default config
const CLIENT_CONFIG = (authPath: string) => {
  return {
    qrMaxRetries: 1,
    authTimeoutMs: 120000,
    authStrategy: new LocalAuth({
      dataPath: `./.${authPath}`,
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
  };
};

// === GENEARTE NEW CLIENT
const botClient_Max = new Client(CLIENT_CONFIG("maxAuth"));
const botClient_May = new Client(CLIENT_CONFIG("mayAuth"));

// ===== MAX CLIENT
botClient_Max.on("qr", (qr: string) => {
  qrcode.generate(qr, { small: true });
  console.log(
    "\n\n######################################################################################\n\n"
  );
});

botClient_Max.on("ready", () => {
  console.log("Client Max is ready!");
});

// ======= MAY CLIENT
botClient_May.on("qr", (qr: string) => {
  qrcode.generate(qr, { small: true });
});

botClient_May.on("ready", () => {
  console.log("Client May is ready!");
});

export { botClient_Max, botClient_May };
