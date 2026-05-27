import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Student from './Student'
function App() {
  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  function Show(){
    if(name===""|| email===""|| password===""){
      alert("Please fill details")
    }
    else{
      alert("Registerd Sucessful")
    }
  }

  {/*
  const [count, setCount] = useState(0)
  const increment =()=>{
    setCount(count+1)
  }
  const decrement=()=>{
    setCount(count-1)
  }
  const reset=()=>{
    setCount(0)
  }
    */}

  return (
    <>
    <h1>Registration Form</h1>
    <input type="text" placeholder="Enter Your Name" onChange={(e)=>setName(e.target.value)}/><br/>
  
    <input type="text" placeholder="Enter Your Email Id"onChange={(e)=>setEmail(e.target.value)}/><br/>
    <input type="text" placeholder="Enter Your Password"onChange={(e)=>setPassword(e.target.value)}/><br/>
    <h2>{name}</h2>
    <h2>{email}</h2>
    <h2>{password}</h2>
    <button onClick={Show}>Submit</button>

    {/*
    {/*
    <h2>student information</h2>
<Student name="Rohit" course="B.Tech" marks="90"/><br/>
<Student name="Mohit" course="M.Tech" marks="95"/><br/>
<Student name="Raj" course="MCA" marks="98"/><br/>

    
    <iframe src="https://www.youtube.com/embed/KWnmLK69EII" allowFullScreen></iframe><br></br>
    <iframe src="https://www.youtube.com/embed/WBqYqgs3hOg"></iframe><br></br>
    <iframe src="https://www.youtube.com/embed/hoNb6HuNmU0?list=RDhoNb6HuNmU0&start_radio=1"></iframe>
   <h1>Welcome to my Web Pages of Abes</h1>
   <h2>Hello</h2>
   <p>Hello Rohit Sir</p>
   <img src="https://images.pexels.com/photos/36578421/pexels-photo-36578421.jpeg"></img>
   <audio controls>
    <source src="" type="audio/mp3" ></source>
   </audio>
   
   <video controls>
    <source src="" type="video/mp4"></source>
   </video> */}
   
   </>
  )
}
export default App