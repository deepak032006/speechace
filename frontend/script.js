let reportData;
let currentUtterance = null;

fetch("http://localhost:5000/api/report")
  .then(res => res.json())
  .then(data => {
    reportData = data;
    document.getElementById("name").innerText = data.name;
    document.getElementById("date").innerText = data.date;

    loadReport("speechace");
    loadQuestions(data.questions);
  });

// TAB SWITCH
document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelector(".tab.active").classList.remove("active");
    tab.classList.add("active");
    loadReport(tab.dataset.type);
  });
});

function loadReport(type) {
  const r = reportData.reports[type];

  document.getElementById("overall").innerText =
    typeof r.overall === "number" ? `${r.overall} / 9` : r.overall;

  setScore("p", r.scores.pronunciation);
  setScore("f", r.scores.fluency);
  setScore("v", r.scores.vocabulary);
  setScore("g", r.scores.grammar);
}

function setScore(prefix, value) {
  document.getElementById(prefix + "Score").innerText = value + " / 9";
  document.getElementById(prefix + "Bar").style.width =
    (value / 9 * 100) + "%";
}

// 🔊 QUESTIONS WITH AUTO SPEECH
function loadQuestions(questions) {
  const container = document.getElementById("questions");
  container.innerHTML = "";

  questions.forEach((q, index) => {
    container.innerHTML += `
      <div class="question-card">
        <h4>Question ${index + 1}: ${q.title}</h4>

        <div class="q-header">
          <div><b>Fluency</b> | <b>Pronunciation</b></div>
          <div class="q-metrics">
            <div class="metric">
              <span class="wpm">${q.wpm}</span> Words per minute
            </div>
            <div class="metric bad">
              ⚠ ${q.badPauses} bad pauses
            </div>
          </div>
        </div>

        <div class="transcript">
          <button class="play-btn" onclick="playSpeech(${index})">▶</button>
          <div class="text">${q.transcript}</div>
        </div>

        <div class="cefr">${q.cefr}</div>
      </div>
    `;
  });
}

// ▶ AUTO GENERATED AUDIO
function playSpeech(index) {
  const text = reportData.questions[index].transcript;

  // stop previous speech
  if (speechSynthesis.speaking) {
    speechSynthesis.cancel();
  }

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 1;      // speed
  utterance.pitch = 1;    // tone
  utterance.lang = "en-US";

  speechSynthesis.speak(utterance);
}
