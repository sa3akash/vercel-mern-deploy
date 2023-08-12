
import { useState } from "react";

export default function App() {

  const [data,setData] = useState()

  const fetchData = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/test`)
    const json = await res.json();
    setData(json)

    
  }

  return (
    <div>
    <h1>Test Site</h1>
      <h2>{data?.message}</h2>
      <button onClick={fetchData}>get data</button>
    </div>
  );
}
