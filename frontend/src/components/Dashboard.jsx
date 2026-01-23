import { useState } from "react";

function Dashboard({ username, setMode, setDifficulty }) {
    const [selectedMode, setSelectedMode] = useState(null);
    const [level, setLevel] = useState("easy");

    return (
        <div className="bg-white p-8 rounded-2xl shadow-2xl w-96">
            <h2 className="text-2xl font-bold mb-4">
                Welcome, {username}
            </h2>

            <div className="mb-4">
                <button
                    className={`w-full mb-2 p-3 rounded border ${selectedMode === "rapid" && "bg-green-100"}`}
                    onClick={() => setSelectedMode("rapid")}
                >
                    ⚡ Rapid Quiz
                </button>

                <button
                    className={`w-full p-3 rounded border ${selectedMode === "long" && "bg-blue-100"}`}
                    onClick={() => setSelectedMode("long")}
                >
                    🕒 20 Minute Quiz
                </button>
            </div>

            <div className="flex justify-between mb-4">
                {["easy", "medium", "hard"].map(d => (
                    <button
                        key={d}
                        onClick={() => setLevel(d)}
                        className={`px-4 py-2 rounded border ${level === d && "bg-purple-500 text-white"}`}
                    >
                        {d}
                    </button>
                ))}
            </div>

            <button
                disabled={!selectedMode}
                onClick={() => {
                    setDifficulty(level);
                    setMode(selectedMode);
                }}
                className="w-full bg-indigo-600 text-white py-3 rounded disabled:opacity-50"
            >
                Start Quiz 🚀
            </button>
        </div>
    );
}

export default Dashboard;
