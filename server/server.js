import Koa from "koa";
import Router from "@koa/router";
import cors from "@koa/cors";
import bodyParser from "koa-bodyparser";
import { Configuration, OpenAIApi } from "openai";
import * as dotenv from "dotenv";
dotenv.config();

const app = new Koa();
const router = new Router();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

app.use(cors());
app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

router.post("/message", async (ctx) => {
  const { message } = ctx.request.body;
  const openai = new OpenAIApi(configuration);
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: message,
    max_tokens: 10,
    temperature: 0.7,
    top_p: 1,
    frequency_penalty: 0.5,
    presence_penalty: 0,
  });
  console.log(message);

  ctx.body = {
    message: response.data.choices[0].text,
  };
  ctx.status = 200;
});

app.listen(5001, () => {
  console.log(`Server listening on port localhost:5001`);
});
