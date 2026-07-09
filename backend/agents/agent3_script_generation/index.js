import { callLLM } from "../../config/llm.js";

const systemPrompt = `You are a YouTube scriptwriting assistant for short-to-medium form videos. Given a video idea, generate a structured script outline.

Always respond with valid JSON only — no markdown, no commentary, no code fences.

Follow this exact structure:
{
  "video_title": string,
  "hook": { "text": string, "duration_seconds": number },
  "body": [
    { "section_title": string, "text": string, "duration_seconds": number },
    { "section_title": string, "text": string, "duration_seconds": number },
    { "section_title": string, "text": string, "duration_seconds": number }
  ],
  "cta": { "text": string, "duration_seconds": number },
  "metadata": { "tags": string[], "target_length_seconds": number }
}

Rules:
- The "body" array must always contain exactly 3 sections.
- "hook" should grab attention in the first 5-10 seconds.
- Keep "text" fields natural, spoken-style language.
- Do not include any text outside the JSON object.`;

export async function generateScript(videoIdea) {
  const script = await callLLM(systemPrompt, `Video idea: "${videoIdea}"`);

  // Recompute target_length_seconds from actual section durations,
  // since the LLM's self-reported total is often inaccurate
  const actualLength =
    script.hook.duration_seconds +
    script.body.reduce((sum, section) => sum + section.duration_seconds, 0) +
    script.cta.duration_seconds;

  script.metadata.target_length_seconds = actualLength;

  return script;
}

async function runTests() {
  const testIdeas = [
  "5 morning habits that changed my life",
  "How black holes actually work",
  "I tried the same outfit for 30 days",
  "3 Python tricks every beginner should know",
  "The day I got scammed online"
  ];

  for (const idea of testIdeas) {
    const result = await generateScript(idea);
    console.log(`\n=== ${idea} ===`);
    console.log(JSON.stringify(result, null, 2));
  }
}

runTests();