
import { useState } from "react";

export default function App() {

  const [data,setData] = useState()
  const [loading,setLoading] = useState(false)
  const fetchData = async () => {
    setLoading(true)
    const res = await fetch(`${import.meta.env.VITE_API_URL}/test`)
    const json = await res.json();
    setData(json)
    setLoading(false)
    
  }

  return (
    <div>
    <h1>Test Site</h1>
      <h2>{data?.message}</h2>
      <button onClick={fetchData} disabled={loading} style={{cursor: loading? "not-allowed": "pointer"}}>get data</button>
    </div>
  );
}
