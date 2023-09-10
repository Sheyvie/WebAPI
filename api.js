const express = require("express");
const app = express();

// Define a route to handle GET requests
app.get("/api", (req, res) => {
  // Get query parameters slack_name and track from the request
  const { slack_name, track } = req.query;

  // Get the current day of the week
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDay = daysOfWeek[new Date().getUTCDay()];

  // Get the current UTC time formatted as specified
  const currentUTCTime = new Date().toISOString().replace(/\.\d{3}Z$/, "Z");

  // Construct the GitHub file URL and GitHub repo URL (replace with your actual URLs)
  const githubFileURL = "https://github.com/Sheyvie/WebAPI/blob/master/api.js";
  const githubRepoURL = "https://github.com/Sheyvie/WebAPI";

  // Create the JSON response object
  const jsonResponse = {
    slack_name,
    current_day: currentDay,
    utc_time: currentUTCTime,
    track,
    github_file_url: githubFileURL,
    github_repo_url: githubRepoURL,
    status_code: 200,
  };

  // Send the JSON response
  res.json(jsonResponse);
});

// Start the server on port 3000
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
