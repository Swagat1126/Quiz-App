import { useEffect } from "react";

function Timer({ time, setTime, totalTime, onTimeUp }) {
    useEffect(() => {
        if (time === 0) {
            onTimeUp();
            return;
        }

        const id = setInterval(() => setTime(t => t - 1), 1000);
        return () => clearInterval(id);
    }, [time, onTimeUp, setTime]);

    const percent = (time / totalTime) * 100;

    return (
        <div className="mb-4">
            <div className="w-full bg-gray-200 h-2 rounded">
                <div
                    className="h-2 bg-green-500 rounded"
                    style={{ width: `${percent}%` }}
                />
            </div>
            <p className="text-sm text-red-600 mt-1">Time Left: {time}s</p>
        </div>
    );
}

export default Timer;
