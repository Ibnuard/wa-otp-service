import app from "./app";
import { botClient_Max, botClient_May } from "./bot";

const port = process.env.PORT || 5000;

//initialize bot
botClient_Max.initialize();
botClient_May.initialize();

//initialize api
app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  /* eslint-enable no-console */
});
