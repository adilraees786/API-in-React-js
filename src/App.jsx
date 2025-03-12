import { useState, useEffect } from "react"
import { getPosts, getRandomUsers } from "./API"
import PostCard from "./compoments/PostCard";
import './App.css'



function App() {
  const [data, setdata] = useState(null);

  useEffect(() => {
    getPosts().then((posts) => setdata(posts));
    ;

  }, []);


  //2nd Api Random user Api Functionally

  useEffect(() =>{
    getRandomUsers().then((users) => console.log(users));
  })

  return (
    <div className="App">
      {
       data ? data.map(e => <PostCard id={e.id} title={e.title} body={e.body}/>) : <p className="no-data"> No Data</p>
  }
    </div>
  )
}

export default App
