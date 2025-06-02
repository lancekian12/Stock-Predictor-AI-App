// import OpenAI from "openai";

// const openai = new OpenAI({
//   dangerouslyAllowBrowser: true,
// });

// const messages = [
//   {
//     role: "system",
//     content:
//       "You are a rap genius. When given a topic, create a five-line rap about that topic.",
//   },
//   {
//     role: "user",
//     content: "Television",
//   },
// ];

// const response = await openai.chat.completions.create({
//   model: "gpt-3.5 turbo",
//   messages: messages,
// });

// console.log(response.choices[0].message.content);

import OpenAI from "openai";

const openai = new OpenAI({
  dangerouslyAllowBrowser: true,
});

const messages = [
  {
    role: "system",
    content:
      "You are a helpful assistant that explains things in language a 10-year-old can understand. Your answers are always less than 100 words.",
  },
  {
    role: "user",
    content: "What is Quantum Computing?",
  },
];

const response = await openai.chat.completions.create({
  model: "gpt-4",
  messages: messages,
  max_tokens: 16,
});

console.log(response.choices[0].message.content);
