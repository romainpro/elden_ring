"use client";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://eldenring.fanapis.com/api/npcs")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data.data); // Assuming the NPCs are in data.data
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {data.map((npc) => (
        <div key={npc.id}>
          <h2>{npc.name}</h2>
          <p>{npc.description}</p>
          <img src={npc.image} alt={npc.name} />
        </div>
      ))}
    </div>
  );
}

export default App;
