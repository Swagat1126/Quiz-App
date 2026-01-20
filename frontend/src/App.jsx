import { useState } from "react";
import ModeSelect from "./components/ModeSelect";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import Leaderboard from "./components/Leaderboard";

function App() {
  const [mode, setMode] = useState(null);
  const [username, setUsername] = useState("");
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [finished, setFinished] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black flex flex-col items-center justify-center px-4">

      {!mode && (
        <ModeSelect setMode={setMode} setUsername={setUsername} />
      )}

      {mode && !finished && (
        <Quiz
          mode={mode}
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
