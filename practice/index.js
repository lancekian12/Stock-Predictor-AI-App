import OpenAI from "openai";

const openai = new OpenAI({
  dangerouslyAllowBrowser: true,
});

const messages = [
  {
    role: "system",
    content:
      "You are a rap genius. When given a topic, create a five-line rap about that topic.",
  },
  {
    role: "user",
    content: "Television",
  },
];

const response = await openai.chat.completions.create({
  model: "gpt-3.5 turbo",
  messages: messages,
});

console.log(response.choices[0].message.content);
