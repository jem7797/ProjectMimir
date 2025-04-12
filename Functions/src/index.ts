import {onRequest} from "firebase-functions/v2/https";
import * as functions from "firebase-functions";
import axios from "axios";
import cors from "cors";

// Set up CORS
const corsHandler = cors({origin: true});

// Fetch the OpenAI key from Firebase config
const openaiKey = functions.config().openai.key;

export const chatbot = onRequest((req, res) => {
  corsHandler(req, res, async () => {
    try {
      const userMessage = req.body.message;

      // Call OpenAI API
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [{role: "user", content: userMessage}],
        },
        {
          headers: {
            "Authorization": `Bearer ${openaiKey}`,
            "Content-Type": "application/json",
          },
        }
      );

      res.status(200).send(response.data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error calling OpenAI:", error.message);
      } else {
        console.error("Unknown error occurred");
      }
      res.status(500).send("Error with OpenAI request");
    }
  });
});
