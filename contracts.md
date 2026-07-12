# Agent I/O Contracts
# Yt Agent Pipeline — Data Flow Between Agents

<!-- Flow Of Agent: Agent 1-> Agent 2 -> Agent 3 -> Agent 4 -->


<!-- Agent 1 = Channel Data Analysis -->
<!-- Input (from user via frontend) -->
{
    "channel_id": "string",
    "channel_name": "string"
 }

<!-- Output (Goes to Agent 2) -->

{
    "channel_id": "string",
  "channel_name": "string",
  "analysis_date": "ISO8601 string",
  "niche": "string",
  <!-- specializing in measuring, interpreting, and optimizing performance for a specific type of digital channel -->
  "top_videos": [
    {
      "title": "string",
      "views": "number",
      "ctr": "number", 
      <!-- measures how many people click your video after seeing its thumbnail and title  -->
      "retention": "number"
      <!-- It tracks how long they watch -->
    }
  ],

  "underperforming_videos": [
    {
      "title": "string",
      "views": "number",
      "ctr": "number",
      "retention": "number"
    }
  ],
  "key_insights": ["string"],
  "content_gaps": ["string"]
  <!-- represents a JSON Array that contains exactly one JSON String value -->
}


<!-- Agent 2 = Content Idea Generation -->
<!-- Input (Output of Agent 1) -->

{
  "channel_id": "string",
  "channel_name": "string",
  "niche": "string",
  "key_insights": ["string"],
  "content_gaps": ["string"]
}

<!-- Output (First goes to user for selection then to Agent 3) -->

{
  "channel_id": "string",
  "generated_ideas": [
    {
      "rank": "number",
      "title": "string",
      "rationale": "string"
    }
  ],
  "selected_idea": {
    {
      "rank": "number",
      "title": "string",
      "rationale": "string"
      <!-- a strategic process that justifies why a piece of content should be created -->
    }
  },
}

<!-- Agent 3 (Script Idea Generation) -->
<!-- Input (Agent 2 - selected_idea) -->

{
  "channel_id": "string",
  "channel_name": "string",
  "video_title": "string",
  "rationale": "string",
  <!-- the strategic justification for this idea, passed through from Agent 2's selected_idea -->
  "niche": "string"
}

<!-- Output (Goes to Agent 4) -->

{
  "video_title": "string",
  "hook": "string",
  <!-- spoken-style opening line(s) meant to grab attention in the first 5-10 seconds -->
  "body_beats": ["string"],
  <!-- exactly 3 beats, each a short spoken-style sentence describing one section of the script -->
  "cta": "string",
  <!-- the closing call-to-action line, spoken-style -->
  "tone": "string",
  <!-- short descriptor of delivery style, e.g. "energetic", "calm and informative", "comedic" -->
  "key_visual_moment": "string"
  <!-- the single most visually striking moment in the video, used by Agent 4 to generate the thumbnail concept -->
}
<!-- Agent 4 (Custom Thumbnail ) -->
<!-- Input  -->

{
  "video_title": "string",
  "key_visual_moment": "string",
  <!-- passed from Agent 3's output — the visual to build the thumbnail concept around -->
  "tone": "string",
  <!-- passed from Agent 3's output — informs the mood/style of the thumbnail -->
  "channel_name": "string"
}

<!-- Output (Back to the user) -->

{
  "concepts": [
    {
      "concept_id": "number",
      "prompt_used": "string",
      <!-- the exact prompt sent to the image generation model, kept for traceability -->
      "image_url": "string",
      "description": "string"
      <!-- short human-readable summary of what this thumbnail concept shows -->
    }
  ]
}