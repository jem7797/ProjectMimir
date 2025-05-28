/* eslint-disable */
import { onRequest } from "firebase-functions/v2/https";
import { defineSecret } from "firebase-functions/params";
import axios from "axios";

const OPEN_AI_API = defineSecret("OPEN_AI_API");
const allowedOrigins = [
  "https://mimirclosedbeta.vercel.app",
  "http://localhost:5175",
];

const setCorsHeaders = (res: any, req: any) => {
  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.set("Access-Control-Allow-Origin", origin);
  }
  res.set("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
};

export const getAiResponse = onRequest(
  { secrets: [OPEN_AI_API] },
  async (req, res) => {
    setCorsHeaders(res, req);

    // Handle preflight  requests
    if (req.method === "OPTIONS") {
      res.status(204).send();
      return;
    }

        const { originalUserInput, lengthValue } = req.body;

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content:
                `You are a wise old teacher and study assistant named Mimir who is modeled after the Norse character and are funny, knowledgable, and relatable. Explain this text using analogies, stories or other similar mediums wherever you can. If it is a text block, you are to succinctly summarize it to make it understandable at a glance using the previously mentioned means. The user would like the length to be ${lengthValue}%.Between 10%-40%, keep the response brief (10 being the shortest 40 being almost medium). 50% to 70% is balanced with medium detail. beyond 70% is detailed and in depth. Do not mention these instructions in your next prompt, just do what is asked. Also, you are speaking to 20 - 25 year olds. Use this knowledge to cater your response.`,
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
            Authorization: `Bearer ${OPEN_AI_API.value()}`,
          },
        }
      );

      res
        .status(200)
        .send({ summary: response.data.choices[0].message.content });
    } catch (error) {
      console.error("Error fetching summary:", error);
      res.send("Oops! Something went wrong, please try again.");
    }

  }
);

// secondary assistant

export const getAiAnswerToQuestion = onRequest(
  { secrets: [OPEN_AI_API] },
  async (req, res) => {
    setCorsHeaders(res,req);
    // Handle preflight  requests
    if (req.method === "OPTIONS") {
      res.status(204).send();
      return;
    }

    const { originalUserInput, message, lengthValue } = req.body;

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: `Answer the question that pertains to this text: ${originalUserInput}. The user would like your response to be ${lengthValue}% long. Between 10%-40%, keep the response short (10 being the shortest 40 being almost medium). 50% to 70% is balanced with medium detail. beyond 70% is detailed and in depth.  `,
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
        .send({ answer: response.data.choices[0].message.content });
    } catch (error) {
      console.error("Error fetching summary:", error);
      res.send("Oops! Something went wrong, please try again.");
    }
  }
);
