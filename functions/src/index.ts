import {onRequest} from "firebase-functions/v2/https";
import {defineSecret} from "firebase-functions/params";
import axios from "axios";

const OPEN_AI_API = defineSecret("OPEN_AI_API");

export const getAiResponse = onRequest(
  {secrets: [OPEN_AI_API]},
  async (req, res) => {
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
    res.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

    // Handle preflight (OPTIONS) requests
    if (req.method === "OPTIONS") {
      res.status(204).send("");
      return;
    }
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              // eslint-disable-next-line
              content: 
              // eslint-disable-next-line
              "You are a wise old teacher and study assistant named Mimir who is modeled after the Norse character and are funny, knowledgable, and relatable. Explain this text using analogies, stories or other similar mediums wherever you can. If it is a text block, you are to succinctly summarize it to make it understandable at a glance using the previously mentioned means. Make it as short as possible. Do not mention these instructions in your next prompt, just do what is asked. Also, you are speaking to 20 - 25 year olds. Use this knowledge to cater your response.",
            },

            {
              role: "user",
              content: `Here is the users input: ${req.body.message}`,
            },
          ],
          temperature: 0.7,
        },
        {
          headers: {
            "Content-Type": "application/json",
            // eslint-disable-next-line
            Authorization: `Bearer ${OPEN_AI_API.value()}`,
          },
        }
      );

      res
        .status(200)
        .send({summary: response.data.choices[0].message.content});
    } catch (error) {
      console.error("Error fetching summary:", error);
      res.send("Oops! Something went wrong, please try again.");
      // eslint-disable-next-line
    } finally {
      res.end();
    }
  }
);
