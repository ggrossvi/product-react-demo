import './App.css'
// import React from 'react'
import Member from './Member'
//import User from './User'

function App() {

  return (
    <div className="container">
      <div className="box">
        <h1>Main Component</h1>
          <Member fname = "Sarah" lname = "Smith" email = "XOjWJ@example.com" username = "sarah123"   password = "sarah123" thumbnail = "sarah.jpg"/> 

          <Member fname = "Lisa" lname = "Omari" email = "lisa@example.com" username = "lisa123" password = "lisa123" thumbnail = "lisa.jpg"/> 

          <Member fname = "Nancy" lname = "Janes" email = "nancy@example.com" username = "nancy123" password = "nancy123" thumbnail = "nancy.jpg"/>  
      </div>
    </div>
  )
}

export default App
