import { useEffect, useRef, useState } from "react";
import Timer from "./Timer";

function Quiz({ mode, setScore, setTotal, setFinished }) {
    const [questions, setQuestions] = useState([]);
    const [current, setCurrent] = useState(0);
    const [time, setTime] = useState(0);
    const fetched = useRef(false);

    useEffect(() => {
        if (fetched.current) return;
        fetched.current = true;

        const amount = mode === "rapid" ? 10 : 20;
        const initialTime = mode === "rapid" ? 15 : 1200;

        setTime(initialTime);
        setCurrent(0);

        const url =
            mode === "rapid"
                ? "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple"
                : "https://opentdb.com/api.php?amount=20&category=9&difficulty=medium&type=multiple";

        fetch(url)
            .then(res => res.json())
            .then(data => {
                const results = data?.results || [];
                setQuestions(results);
                setTotal(results.length);
            });
    }, [mode, setTotal]);

    const nextQuestion = () => {
        if (current + 1 >= questions.length) {
            setFinished(true);
        } else {
            setCurrent(c => c + 1);
            if (mode === "rapid") setTime(15);
        }
    };

    if (questions.length === 0) {
        return <p className="text-white text-xl">Loading...</p>;
    }

    const q = questions[current];
    const options = [...q.incorrect_answers];
    options.splice(
        Math.floor(Math.random() * (options.length + 1)),
        0,
        q.correct_answer
    );

    return (
        <div className="bg-white p-6 rounded-2xl shadow-2xl w-96">
            <h2 className="font-bold mb-2">
                Question {current + 1} of {questions.length}
            </h2>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                <div
                    className="bg-blue-500 h-2 rounded-full transition-all"
                    style={{
                        width: `${((current + 1) / questions.length) * 100}%`
                    }}
                ></div>
            </div>

            <Timer
                time={time}
                setTime={setTime}
                onTimeUp={mode === "rapid" ? nextQuestion : () => setFinished(true)}
            />

            <p
                className="my-4 font-medium"
                dangerouslySetInnerHTML={{ __html: q.question }}
            />

            <div className="grid gap-3">
                {options.map((opt, i) => (
                    <button
                        key={i}
                        className="w-full px-4 py-3 rounded-lg border bg-white text-gray-800
                       hover:bg-blue-500 hover:text-white hover:scale-[1.02]
                       transition-all shadow"
                        onClick={() => {
                            if (opt === q.correct_answer) {
                                setScore(s => s + 1);
                            }
                            nextQuestion();
                        }}
                        dangerouslySetInnerHTML={{ __html: opt }}
                    />
                ))}
            </div>
        </div>
    );
}

export default Quiz;
