import React from 'react'
import './css/style.css'

const ChickenScreen = () => {
   React.useEffect(() => {
      require('./js/script')
   }, [])

   return (
      <div className="__chicken_wrap__">
         <div id="world"></div>
         <div id="instructions">^<br />Move the head of this bird<br /><span className="lightInstructions">and watch how the 2 others<br />interact with him</span></div>
         <div id="credits">
            <p> <a href="https://codepen.io/Yakudoo/" target="blank">my other codepens</a> | <a href="https://www.epic.net" target="blank">epic.net</a></p>
         </div>
      </div>
   )
}

export default ChickenScreen