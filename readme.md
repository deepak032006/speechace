Speechace Speaking Assessment Report (Clone)
📌 Project Overview

This project is a Speechace-style Speaking Test Report Page built as part of a Full Stack Development assignment.

The application displays:

Student speaking assessment scores

Skill-wise breakdown (Pronunciation, Fluency, Vocabulary, Grammar)

Tab-based score switching (Speechace / CEFR / IELTS)

Descriptive feedback

Per-question transcript with auto-generated speech audio

Fluency metrics like Words Per Minute and Bad Pauses

This is a functional prototype, not a production system.

🛠️ Tech Stack Used
Frontend

HTML

CSS

JavaScript (Vanilla)

Backend

Node.js

Express.js

JSON (as data source)

Other

Browser Text-to-Speech API (SpeechSynthesis) for audio playback

📁 Project Structure
speechace-clone/
│
├── backend/
│   ├── server.js
│   ├── data.json
│   └── package.json
│
└── frontend/
    ├── index.html
    ├── style.css
    └── script.js

▶️ How to Run the Project
1️⃣ Start Backend Server
cd backend
npm install
node server.js


Backend will run on:

http://localhost:5000

2️⃣ Run Frontend

Open frontend/index.html in your browser

No build step required

📊 Data Source

All report data is stored in:

backend/data.json


This includes:

Student details

Score data for Speechace / IELTS / CEFR

Question transcripts and fluency metrics

No database is used.

🔁 Summary of Scores (Tab Switching)

Tabs like Speechace, CEFR, and IELTS are displayed

Clicking a tab dynamically updates:

Overall score

Skill-wise progress bars

Feedback content

All data is fetched from the backend API

🧠 Feedback Logic

Feedback is displayed dynamically based on score values:

Score ≥ 8 → Excellent performance

Score between 6–7 → Good performance with minor inaccuracies

Score < 6 → Needs improvement

Feedback updates automatically when the selected tab changes.

🔊 Audio & Transcript Feature

No audio files are stored or uploaded

Audio is generated automatically using Browser Text-to-Speech

Clicking the play button reads the transcript aloud

This keeps the backend simple and avoids media storage
