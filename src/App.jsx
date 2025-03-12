import { useState, useEffect } from "react"
import { getPosts, getRandomUsers } from "./API"
import PostCard from "./compoments/PostCard";
import UserCard from "./compoments/UserCard";
import './App.css'



function App() {
  const [data, setdata] = useState(null);
  //State for user Data
  const [userData, setuserData] = useState(null);

  useEffect(() => {
    getPosts().then((posts) => setdata(posts));
    ;

  }, []);


  //2nd Api Random users Functionally

  useEffect(() =>{
    getRandomUsers().then((users) => setuserData(users.results[0]));
  })

  console.log("===>UserData", userData);
  

  return (
    <div className="App">
{/* Random Users */}
<UserCard data={userData}/>






{/* End Function of random Users */}
      {
       data ? data.map(e => <PostCard id={e.id} title={e.title} body={e.body}/>) : <p className="no-data"> No Data</p>
  }
    </div>
  )
}

export default App
