import { useEffect, useState } from "react";

const App = () => {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    fetch("http://localhost:5001/")
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => setMessage(error.message));
  }, []);

  return (
    <div>
      <h1 className="bg-amber-500 font-bold text-5xl p-10">HackHeroes</h1>
      <p>{message}</p>
    </div>
  );
};

export default App;
