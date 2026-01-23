import { useState } from "react";
import ModeSelect from "./components/ModeSelect";
import Dashboard from "./components/Dashboard";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import Leaderboard from "./components/Leaderboard";

function App() {
  const [username, setUsername] = useState("");
  const [mode, setMode] = useState(null);
  const [difficulty, setDifficulty] = useState("easy");
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [finished, setFinished] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black flex flex-col items-center justify-center gap-6">

      {!username && <ModeSelect setUsername={setUsername} />}

      {username && !mode && (
        <Dashboard
          username={username}
          setMode={setMode}
          setDifficulty={setDifficulty}
        />
      )}

      {mode && !finished && (
        <Quiz
          mode={mode}
          difficulty={difficulty}
          setScore={setScore}
          setTotal={setTotal}
          setFinished={setFinished}
        />
      )}

      {finished && (
        <>
          <Result
            username={username}
            score={score}
            total={total}
            reset={() => {
              setMode(null);
              setScore(0);
              setFinished(false);
            }}
          />
          <Leaderboard />
        </>
      )}
    </div>
  );
}

export default App;
