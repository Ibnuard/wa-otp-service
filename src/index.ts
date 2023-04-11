import app from "./app";
import bot from "./bot";

const port = process.env.PORT || 5000;

//initialize bot
bot.initialize();

//initialize api
app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  /* eslint-enable no-console */
});
