import { useState } from "react";

function ModeSelect({ setUsername }) {
    const [name, setName] = useState("");

    return (
        <div className="bg-white p-8 rounded-2xl shadow-2xl w-96 text-center">
            <h2 className="text-2xl font-bold mb-4">Welcome 👋</h2>

            <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded mb-4"
                value={name}
                onChange={e => setName(e.target.value)}
            />

            <button
                disabled={!name}
                onClick={() => setUsername(name)}
                className="w-full bg-indigo-600 text-white py-3 rounded-lg disabled:opacity-50"
            >
                Continue
            </button>
        </div>
    );
}

export default ModeSelect;
