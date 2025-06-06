import { OpenAI } from "openai";

const outputImg = document.getElementById("output-img");

const openai = new OpenAI({
  dangerouslyAllowBrowser: true,
});

document.getElementById("submit-btn").addEventListener("click", () => {
  const prompt = document.getElementById("instruction").value;
  generateImage(prompt);
});

async function generateImage(prompt) {
  const response = await openai.images.generate({
    model: "dall-e-3", // default dall-e-2
    prompt: prompt, //required
    n: 1, //default 1
    size: "1024x1024",
    style: "vivid",
    response_format: "b64_json",
  });
  console.log(response);
  outputImg.innerHTML = `<img src="data:image/png;base64,${response.data[0].b64_json}" alt="The Image API Failed">`;
}

//A 16th-century woman with long brown hair standing in front of a green vista with cloudy skies. She's looking at the viewer with a faint smile on her lips.
