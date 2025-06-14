import { useEffect, useState } from "react";

function App() {
  const [secondsLeft, setSecondsLeft] = useState(360000);

  useEffect(() => {
    if (secondsLeft <= 0) {
      return;
    }

    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [secondsLeft]);

  const min = Math.floor(secondsLeft / 60000);
  const sec = secondsLeft % 60;

  return (
    <div>
      <p>{min}:{sec < 10 ? `0${sec}` : sec}</p>
    </div>
  )

}

export default App