import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
 
  return (
    <div className="App">

   <div className="buttons">
 
 <div className="rounded-switch">
    <label className="switch">
  <input type="checkbox"/>
  <span className="slider round"></span>
</label>
</div>

<div className="fetchPhotosButton">
  <button>Fetch new Photos</button>


</div>


   </div>

      <div className="images">
    
    <div>
      <img src="images/b9.jpg" width="367px"/>
      </div>
    <div><img src="images/v1.jpg" width="367px"/></div>
    <div><img src="images/tefo3.jpg" width="367px"/></div>
    <div><img src="images/tefo4.jpg" width="367px"/></div>
    </div>
     </div>
  )
}

export default App
