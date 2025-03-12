import { useState, useEffect } from "react"
import { getPosts } from "./API"
import PostCard from "./compoments/PostCard";
import './App.css'



function App() {
  const [data, setdata] = useState(null);

  useEffect(() => {
    getPosts().then((posts) => setdata(posts));
    ;

  }, []);

  return (
    <div className="App">
      {
       data ? data.map(e => <PostCard id={e.id} title={e.title} body={e.body}/>) : <p className="no-data"> No Data</p>
  }
    </div>
  )
}

export default App
