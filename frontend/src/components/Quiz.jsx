import { useEffect, useState } from "react";
import Timer from "./Timer";

function Quiz({ mode, difficulty, setScore, setTotal, setFinished }) {
    const [questions, setQuestions] = useState([]);
    const [current, setCurrent] = useState(0);
    const [time, setTime] = useState(0);

    useEffect(() => {
        const amount = mode === "rapid" ? 10 : 20;
        const totalTime = mode === "rapid" ? 15 : 1200;

        setQuestions([]);
        setCurrent(0);
        setScore(0);
        setTime(totalTime);

        fetch(
            `https://quizapi.io/api/v1/questions?category=code&difficulty=${difficulty}&limit=${amount}`,
            {
                headers: {
                    "X-Api-Key": import.meta.env.VITE_QUIZ_API_KEY,
                },
            }
        )
            .then(res => res.json())
            .then(data => {
                setQuestions(data);
                setTotal(data.length);
            });
    }, [mode, difficulty]);

    const next = () => {
        if (current + 1 >= questions.length) {
            setFinished(true);
        } else {
            setCurrent(c => c + 1);
            if (mode === "rapid") setTime(15);
        }
    };

    if (!questions.length) {
        return <p className="text-white">Loading...</p>;
    }

    const q = questions[current];
    const options = Object.entries(q.answers).filter(([_, v]) => v);

    return (
        <div className="bg-white p-6 rounded-xl w-96">

            {/* Question info */}
            <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>
                    Question {current + 1} of {questions.length}
                </span>
                <span className="capitalize font-semibold">{difficulty}</span>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-gray-200 h-2 rounded mb-4">
                <div
                    className="h-2 bg-blue-500 rounded transition-all"
                    style={{
                        width: `${((current + 1) / questions.length) * 100}%`,
                    }}
                />
            </div>

            <Timer
                time={time}
                setTime={setTime}
                totalTime={mode === "rapid" ? 15 : 1200}
                onTimeUp={next}
            />

            <p className="font-semibold mb-4">{q.question}</p>

            {options.map(([key, value]) => (
                <button
                    key={key}
                    onClick={() => {
                        if (q.correct_answers[`${key}_correct`] === "true") {
                            setScore(s => s + 1);
                        }
                        next();
                    }}
                    className="w-full mb-2 p-3 border rounded hover:bg-blue-500 hover:text-white"
                >
                    {value}
                </button>
            ))}
        </div>
    );
}

export default Quiz;
