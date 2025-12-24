Speechace Speaking Assessment Report (Clone)
📌 Project Overview

This project is a Speechace-style Speaking Test Report Page developed as part of a Full Stack Development assignment.

The application replicates the core experience of a speaking assessment report by presenting student performance data in a clear, structured, and interactive UI.

⚠️ This project is a functional prototype created for evaluation purposes and is not intended for production use.

✨ Features

Display of overall speaking score

Skill-wise score breakdown

Pronunciation

Fluency

Vocabulary

Grammar

Tab-based score switching

Speechace

CEFR

IELTS

Dynamic descriptive feedback based on score ranges

Per-question transcript and feedback

Auto-generated speech audio using browser Text-to-Speech

Fluency metrics such as:

Words Per Minute (WPM)

Bad Pauses

🛠️ Tech Stack
Frontend

HTML

CSS

JavaScript (Vanilla)

Backend

Node.js

Express.js

JSON (used as a data source)

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
1️⃣ Start the Backend Server
cd backend
npm install
node server.js


The backend will run on:

http://localhost:5000

2️⃣ Run the Frontend

Open frontend/index.html in any modern browser

No build or bundling step is required

📊 Data Source

All report data is stored in:

backend/data.json


This file contains:

Student details

Score data for Speechace / IELTS / CEFR

Question transcripts and fluency metrics
