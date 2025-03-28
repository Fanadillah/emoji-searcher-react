import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [emojisData, setEmojisData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchEmojis() {
      setLoading(true)
      try {
        const res = await axios.get('https://run.mocky.io/v3/27e16410-66b1-4507-8ae8-49618f237b0c')
        
        setEmojisData(res.data)
        setLoading(false)

      } catch (error) {
        console.error(error)

        setError(true)
        setLoading(false)
      }
    }

    fetchEmojis()
  }, [])

  console.log('loading ?', loading)
  console.log('error ?', error)
  console.log('emojisData ?', emojisData)

  return (
    <div>
      <h1>Hello, world!</h1>
    </div>
  );
}

export default App;
