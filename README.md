🧠 Online Quiz & Assessment Platform
📌 Project Description

This project is a full-stack online assessment platform where users can take timed quizzes, view their scores, and check a leaderboard displaying top performers.

The system dynamically fetches questions from an external API, manages a countdown timer with auto-submit functionality, stores results in a database, and displays rankings in real time.

✨ Features

⏱️ Timed quizzes with auto-submit

🔄 Dynamic question fetching from API

👤 Username-based participation

📊 Score calculation

🏆 Leaderboard with top scores

🎨 Modern and responsive UI using Tailwind CSS

🌐 Full-stack integration (Frontend + Backend + Database)

🛠️ Tech Stack
Frontend

React.js

Tailwind CSS

Vite

Backend

Node.js

Express.js

Database

MongoDB (MongoDB Atlas)

APIs Used

Open Trivia DB (for quiz questions)

📁 Project Structure
Week 2/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
├── backend/
│   ├── server.js
│   ├── routes/
│   ├── models/
│   └── package.json
└── README.md


⚙️ How to Run the Project Locally
1️⃣ Clone the Repository
git clone <your-github-repo-link>
cd Week\ 2

2️⃣ Run Backend Server
cd backend
npm install
node server.js


✔️ Make sure MongoDB Atlas is connected
✔️ Server runs on http://localhost:5000

3️⃣ Run Frontend Application

Open a new terminal:

cd frontend
npm install
npm run dev


✔️ App runs on http://localhost:5173

🧪 How Leaderboard Works

User enters their name before starting the quiz

After quiz completion, name and score are sent to the backend

Scores are stored in MongoDB

Leaderboard displays top scores in descending order



🚀 Future Enhancements

Coding challenge section

Authentication (Login / Signup)

Difficulty-based leaderboard

Online code compiler integration

Deployment to cloud platforms

🗣️ Interview / Viva Explanation

“I developed a full-stack online assessment platform using React, Node.js, and MongoDB. It supports timed quizzes, dynamic question fetching, automatic submission, and a leaderboard system.”

👨‍💻 Author

Name: Swagat Koreti
Project Type: Internship / Academic Project
