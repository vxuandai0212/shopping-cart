import React from 'react'
import './css/style.css'

const Lion = () => {
   React.useEffect(() => {
      require('./js/script')
   }, [])

   return (
      <div className="__lion_wrap__">
         <div id="world"></div>
         <div id="instructions">Press and drag to make wind<br /><span className="lightInstructions">the lion will surely appreciate</span></div>

         <div id="credits">
            <p>Prints on <a className="society6" href="https://society6.com/yakudoo/" target="blank">society6</a> | <a href="https://codepen.io/Yakudoo/" target="blank">my other codepens</a> | <a href="https://www.epic.net" target="blank">epic.net</a></p>
         </div>
      </div>
   )
}

export default Lion