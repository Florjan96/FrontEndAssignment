import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
 
  return (
    <div className="App">

<h2>Photo Fetcher</h2>
   <div className="buttons">
 
 <div className="rounded-switch">
    <label className="switch">
  <input type="checkbox"/>
  <span className="slider round"></span>
  

</label>

</div>




<div className="fetchPhotosButton">
  <button >Fetch New Photos</button>


</div>


   </div>

      <div className="images">
    
    <div className="first-image">
      <img src="images/b9.jpg" width="367px"/>
      <h3>Lucas Budimaier</h3>
      <p>https://unsplash.com/photos/pwaaqfoMibi</p>
      </div>

    <div className="second-photo">
      <img src="images/p2.jpg" width="367px"/>
      <h3>Lucas Budimaier</h3>
      <p>https://unsplash.com/photos/pwaaqfoMibi</p>
      </div>

    <div className="third-photo">
      <img src="images/tefo3.jpg" width="367px"/>
      <h3>Lucas Budimaier</h3>
      <p>https://unsplash.com/photos/pwaaqfoMibi</p>
      </div>

    <div className="fourth-photo">
      <img src="images/tefo4.jpg" width="367px"/>
      <h3>Lucas Budimaier</h3>
      <p>https://unsplash.com/photos/pwaaqfoMibi</p>
      </div>
    </div>
     </div>
  )
}

export default App
