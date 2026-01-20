import { useEffect, useState } from "react";

function Leaderboard() {
    const [scores, setScores] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/scores")
            .then(res => res.json())
            .then(data => setScores(data));
    }, []);

    return (
        <div className="bg-white mt-2 p-6 rounded-2xl shadow-2xl w-96">
            <h2 className="text-xl font-bold mb-4">🏆 Leaderboard</h2>

            {scores.length === 0 && (
                <p className="text-gray-500 text-center">No scores yet</p>
            )}

            {scores.map((s, i) => (
                <div
                    key={i}
                    className="flex justify-between items-center px-3 py-2 mb-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
                >
                    <span className="font-semibold">
                        #{i + 1} {s.name}
                    </span>
                    <span className="text-blue-600 font-bold">
                        {s.score}
                    </span>
                </div>
            ))}
        </div>
    );
}

export default Leaderboard;
