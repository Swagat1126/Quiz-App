import { useEffect } from "react";

function Timer({ time, setTime, onTimeUp }) {
    useEffect(() => {
        if (time === 0) {
            onTimeUp();
            return;
        }

        const id = setInterval(() => setTime(t => t - 1), 1000);
        return () => clearInterval(id);
    }, [time, onTimeUp, setTime]);

    return (
        <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
            <span className="font-semibold text-red-600">
                Time Left: {time}s
            </span>
        </div>
    );
}

export default Timer;
