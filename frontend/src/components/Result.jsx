import { useEffect } from "react";

function Result({ username, score, total, reset }) {
    useEffect(() => {
        fetch("http://localhost:5000/api/scores", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: username, score }),
        });
    }, [username, score]);

    return (
        <div className="bg-white p-8 rounded-2xl shadow-2xl w-96 text-center animate-fadeIn">
            <h2 className="text-3xl font-bold mb-2">🎉 Quiz Completed</h2>

            <p className="text-gray-600 mb-1">
                Player: <b>{username}</b>
            </p>

            <p className="text-xl font-bold text-green-600 mb-4">
                Score: {score} / {total}
            </p>

            <button
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition shadow"
                onClick={reset}
            >
                Play Again
            </button>
        </div>
    );
}

export default Result;
