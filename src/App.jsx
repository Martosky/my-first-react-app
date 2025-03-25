import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import Contact from "./Contact.jsx"

function App() {
const [input, setInput] = useState({
  name: '',
  phone
})

  return (
    <>
    <Header />
      <h1 className='main-header-text'>Hello, World</h1>
      <div className='main-body'>
      <div className="form-container">
      < Contact 
         label="Fname"
         type="text"
         id="fname"
         placeholder="First Name"
       />
      < Contact 
         label="Lname"
         type="text"
         id="lname"
         placeholder="Last Name"
       />
       < Contact 
         label="Phone No"
         type="number"
         id="number"
         placeholder="Phone No"
       />

< Contact 
         label="Email"
         type="email"
         id="email"
         placeholder="Email"
         required
       />

< Contact 
         label="school"
         type="text"
         id="school"
         placeholder="School Attended"
         required
       />
       < Contact 
         label="degree"
         type="text"
         id="degree"
         placeholder="Degree"
         required
       />
       <div className='buttton-container'>
         <button type="submit" id="submit">Submit</button>
         <button type="reset" id="Edit">Edit</button>
       </div> 
       </div>
       <Secondpage />
       </div>
    </>
  )
}

export default App
