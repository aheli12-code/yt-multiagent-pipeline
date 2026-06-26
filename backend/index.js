const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/agent1", require("./routes/agent1Routes"));
app.use("/api/agent2", require("./routes/agent2Routes"));
app.use("/api/agent3", require("./routes/agent3Routes"));
app.use("/api/agent4", require("./routes/agent4Routes"));
app.use("/api/pipeline", require("./routes/pipelineRoutes"));

app.get("/", (req, res) => {
  res.json({ message: "YT MultiAgent Pipeline API is running" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});