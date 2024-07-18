import { useState, useCallback, useEffect, useRef } from 'react'

import './App.css'

function App() {

let [length, setLength]= useState(8)
let [numberAllowed, setNumberAllowed]= useState(false)
let [CharacterAllowed, setCharacterAllowed]= useState(false)
let [Password, setPassword]= useState("")

const passwordgenerator=useCallback(()=>{
  
let pass =""
let str =
"ABCDEFGHIJKLMPORQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
if(numberAllowed) str += "0123456789"
if(CharacterAllowed) str += "!@#$%^&*{}?><_-"





for (let i = 1; i <=length; i++) {
  let char = Math.floor(Math.random() *str.length + 1)

  pass += str.charAt(char)
  setPassword(pass)
}

}, [length, numberAllowed, CharacterAllowed])


const passwordRef = useRef(null)



useEffect(()=>{
  passwordgenerator()
}, [length, numberAllowed, CharacterAllowed, setPassword])


const copyPasswordToClipboard = useCallback(()=>{
passwordRef.current?.select();
// passwordRef.current?.setSelectionRange(0, 2);


window.navigator.clipboard.writeText(Password)
}, )


  return (
    <>
    
    
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
    <h1 className="text-4xl text-center text-white my-3">Password Generator</h1>
    <br />
<div className='flex shadow rounded-lg overflow-hidden mb-4'>
<input 
type="text"
value={Password}
readOnly
placeholder='Password'
className='outline-none w-full py-1 px-3'


/>

<button 
ref={passwordRef}
onClick={copyPasswordToClipboard}
 className='outline-none bg-blue-700 text-white px-3npy-0.5 shrink-0'
 >Copy</button>

</div>

<div className='flex text-sm gap-x-2'>
<div className='flex items-center gap-x-1'>
<input 

type="range"
min={8}
max={20}
value={length}
className='cursor-pointer'
onChange={(e)=>{
  setLength(e.target.value)
}}
 />
 <label>Length: {length}</label>


</div>

<div className='flex items-center gap-x-1'>

<input type="checkbox"
defaultChecked={numberAllowed}
id='numberInput'
onChange={() =>{
  setNumberAllowed((prev)=> !prev);
}}

/>
<label htmlFor="numberInput">Numbers</label>

</div>

<input type="checkbox"
defaultChecked={CharacterAllowed}
id='characterInput'
onChange={()=>{
  setCharacterAllowed((prev)=> !prev)

}} />
<label htmlFor="characterInput">Special Character</label>





</div>


    </div>
    
    
    
    
    </>
  )
}

export default App
