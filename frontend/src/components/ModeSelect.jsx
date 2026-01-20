import { useState } from "react";

function ModeSelect({ setMode, setUsername }) {
    const [name, setName] = useState("");

    return (
        <div className="bg-white p-8 rounded-2xl shadow-2xl w-96 text-center">
            <h2 className="text-2xl font-bold mb-4">Welcome 👋</h2>
            <p className="text-gray-600 mb-4">Enter your name to start</p>

            <input
                type="text"
                placeholder="Your Name"
                className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <button
                disabled={!name}
                className="w-full mb-3 bg-green-500 hover:bg-green-600 disabled:opacity-50 text-white py-3 rounded-lg transition"
                onClick={() => {
                    setUsername(name);
                    setMode("rapid");
                }}
            >
                ⚡ Rapid Quiz
            </button>

            <button
                disabled={!name}
                className="w-full bg-purple-500 hover:bg-purple-600 disabled:opacity-50 text-white py-3 rounded-lg transition"
                onClick={() => {
                    setUsername(name);
                    setMode("long");
                }}
            >
                🕒 20 Minute Quiz
            </button>
        </div>
    );
}

export default ModeSelect;
