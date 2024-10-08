import express from "express";
import * as dotenv from "dotenv";
import { OpenAI } from "openai";

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.route("/").get((req, res) => {
  res.status(200).json({ message: "Hello from DALL.E ROUTES" });
});

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ message: "Prompt is required" });
    }

    const response = await openai.images.generate({
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });

    // Check if the response contains a valid image
    const image = response.data[0]?.b64_json;

    if (!image) {
      return res.status(500).json({ message: "No image returned from OpenAI" });
    }

    res.status(200).json({ photo: image });
  } catch (error) {
    console.error(
      "Error generating image:",
      error.response ? error.response.data : error.message
    );
    res
      .status(500)
      .json({
        message: "Something went wrong",
        error: error.response ? error.response.data : error.message,
      });
  }
});

export default router;
