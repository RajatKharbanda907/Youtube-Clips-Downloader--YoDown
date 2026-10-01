import { useState, useSyncExternalStore } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [url,seturl] = useState("")
  const [start,setstart]= useState("")
  const[end,setend]=useState("")
  const [success,setsuccess]=useState(false)
  const [message,setmessage] = useState("")
 const handledownload = ()=>{
  try{
    const newurl = `http://localhost:2492/user/download?url=${url}&start=${start}&end=${end}`
    const link = document.createElement("a");
  link.href = newurl;
  link.click();
    setsuccess(true)
    seturl("")
    setstart("")
    setend("")
  }catch(err){
    setmessage(err.response?.data?.message || "something went wrong")
    setsuccess(false)
    seturl("")
    setstart("")
    setend("")
  }

 } 

  return (
    <>
    <div className='h-screen w-screen bg-black'>
   <h1 className='ml-10 pt-10 text-white font-mono text-2xl'>YoDown</h1>
  <h1 className='text-9xl text-white leading-40 font-medium mt-20 pl-8'>Download<br></br> YouTube <span className='bg-gradient-to-r from-blue-400 to-green-300 bg-clip-text text-transparent'>Clips</span></h1>
  <div className='h-110 w-110 relative left-250 mt-19 bg-white rounded-4xl bottom-100 flex justify-center items-center gap-4 flex-col'>
    <h3 className='text-xl font-serif relative right-10'>Enter Url Of youtube video</h3>
    <input type='text' placeholder='Enter your Url ' value={url} onChange={(e)=>(seturl(e.target.value))} className='relative right-2 w-80 border-2 rounded border-black'></input>
    <h3 className='pt-3 text-xl font-serif relative right-10'>Enter Start Time of the Video</h3>
    <input type="text" placeholder='Enter Start Time of video  Ex-00:23,02:34' value={start} onChange={(e)=>setstart(e.target.value)} className='relative right-2 w-80 border-2 rounded border-black'></input>
    <h3 className='pt-3 text-xl font-serif relative right-10'>Enter End Time of the Video</h3>
    <input type="text" placeholder='Enter End Time of video  Ex-00:32,02:23' value={end} onChange={(e)=>(setend(e.target.value))} className='relative right-2 w-80 border-2 rounded border-black'></input>
    <button onClick={handledownload} className='bg-blue-600 w-80 relative top-5  right-1 hover:bg-blue-200 p-2 rounded-2xl'>Download <i class="ri-arrow-down-line"></i></button>
    {message && <h3>{message}</h3>}
  </div>
    </div>
    </>
  )
}

export default App
