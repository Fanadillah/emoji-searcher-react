import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [emojisData, setEmojisData] = useState([])

  useEffect(() => {
    async function fetchEmojis() {
      const res = await axios.get('https://run.mocky.io/v3/27e16410-66b1-4507-8ae8-49618f237b0c')

      console.log(res)
    }

    fetchEmojis()
  }, [])

  return (
    <div>
      <h1>Hello, world!</h1>
    </div>
  );
}

export default App;
