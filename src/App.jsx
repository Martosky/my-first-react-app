import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import Contact from "./Contact.jsx"

function App() {
const [information, setInformation] = useState()

  return (
    <>
    <Header />
      <h1 className='main-header-text'>Hello, World</h1>
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
       <hr />
       </div>
    </>
  )
}

export default App
