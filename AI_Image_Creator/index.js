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
  console.log(response);
  outputImg.innerHTML = `<img src="" alt="The Image API Failed">`;
}

//A 16th-century woman with long brown hair standing in front of a green vista with cloudy skies. She's looking at the viewer with a faint smile on her lips.
