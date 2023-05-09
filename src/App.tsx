import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
 
  return (
    <div className="App">

<h2>Photo Fetcher</h2>
   <div className="buttons">
 

 <div className="first-button">
 <div className="rounded-switch">
    <label className="switch">
  <input type="checkbox"/>
  <span className="slider round"></span>
  

</label>


</div>
<div className="toggle-text">
<h4>Make photos grayscale</h4>

</div>
</div>


<div className="fetchPhotosButton">
  <button >Fetch New Photos</button>


</div>


   </div>

      <div className="images">
    
    <div className="first-image">
      <img src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=2000" width="367px"/>
      <h3>Lucas Budimaier</h3>
      <p>https://unsplash.com/photos/pwaaqfoMibi</p>
      </div>

    <div className="second-photo">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKn-X2ZRRr7DWK4gEnkQFFo_NSpS4dxoS-gg&usqp=CAU" width="367px"/>
      <h3>Lucas Budimaier</h3>
      <p>https://unsplash.com/photos/pwaaqfoMibi</p>
      </div>

    <div className="third-photo">
      <img src="https://cdn.unenvironment.org/2022-12/Mangroves_credit_UNEP__Duncan_Moore.jpg" width="367px"/>
      <h3>Lucas Budimaier</h3>
      <p>https://unsplash.com/photos/pwaaqfoMibi</p>
      </div>

    <div className="fourth-photo">
      <img src="https://blog.depositphotos.com/wp-content/uploads/2017/07/Soothing-nature-backgrounds-2.jpg.webp" width="367px"/>
      <h3>Lucas Budimaier</h3>
      <p>https://unsplash.com/photos/pwaaqfoMibi</p>
      </div>
    </div>
     </div>
  )
}

export default App
