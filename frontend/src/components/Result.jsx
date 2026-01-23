import { useEffect } from "react";

function Result({ username, score, total, reset }) {
    useEffect(() => {
        fetch("http://localhost:5000/api/scores", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: username, score }),
        });
    }, []);

    return (
        <div className="bg-white p-6 rounded-xl text-center w-96">
            <h2 className="text-2xl font-bold mb-2">Quiz Completed 🎉</h2>
            <p className="mb-4">{username} scored {score} / {total}</p>

            <button onClick={reset} className="bg-indigo-600 text-white px-6 py-2 rounded">
                Play Again
            </button>
        </div>
    );
}

export default Result;
