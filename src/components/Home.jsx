import { useEffect, useState } from "react"
import "./Home.css"
import "./Header"
import Header from "./Header"


function Home(){
    const[title,setTitle]=useState("")
    const[description,setdescription]=useState("")
    const[AddData,setAddData]=useState([])
    const[darkMode, setDarkMode] = useState(false);
    //  useEffect(() => {
    //     localStorage.setItem('react-goals',JSON.stringify(goals);)
    //  },[goals]);

    const add=()=>{
        setAddData(newData=>[...AddData,title,description])
        setTitle("")
        setdescription("")
    }
    return(
        <div className={`${darkMode && 'dark-mode'}`}>
        <div class= "Goal">
            <Header handleToggleDarkMode={setDarkMode}/>
            <h1>My Goals</h1>
            <input type="text" placeholder="Enter Your goal title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <input type="text" placeholder="Enter your goal Description" value={description} onChange={(e)=>setdescription(e.target.value)}/>
            <button onClick={add}>Add Goals</button>
            {
                AddData.map((i)=>
                    <>
                        <h1 >{i}</h1>
                    </>
                )  
            }
        </div>
        </div>
    )
}
export default Home;