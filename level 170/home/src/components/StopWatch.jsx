import React, { useState, useEffect } from 'react';

const StopWatch = () => {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(true);

    useEffect(() => {
        if (!isRunning) return;

        const intervalId = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [isRunning]);

    const stopTimer = () => setIsRunning(false);
    const resumeTimer = () => setIsRunning(true);
    const resetTimer = () => setSeconds(0);

    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="text-6xl font-bold text-gray-800 bg-white px-12 py-6 rounded-2xl shadow-lg border border-gray-300 mb-6">
                {min}:{sec < 10 ? `0${sec}` : sec}
            </div>

            <div className="flex gap-4">
                <button onClick={stopTimer} className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-xl shadow">Stop</button>

                <button onClick={resumeTimer} className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-xl shadow">Resume</button>

                <button onClick={resetTimer}className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-xl shadow" >Reset</button>
            </div>
        </div>
    );
};

export default StopWatch;