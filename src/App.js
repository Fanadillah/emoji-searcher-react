import { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Input from "./components/Input"
import Empty from "./components/Empty";
import Emojis from "./components/Emojis";

function App() {
  const [emojisData, setEmojisData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchEmojis() {
      setLoading(true)
      try {
        const res = await axios.get('https://run.mocky.io/v3/7cd5f6a9-8f05-4508-bb5f-eb9bf864397c')
        
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



  return (
    <>
      <Navbar />
      <Container>
      <Input
        onChange={}
        value={}
      />

      {loading && <Empty text="Loading..."/>}
      {error && <Empty text="Error!"/>}

      {emojisData.length > 0 && <Emojis emojisData={emojisData}/>}
      </Container>

    </>
  );
}

export default App;
