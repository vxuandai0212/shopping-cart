import React from 'react'
import './css/style.css'

const ShootingStar = () => {
   React.useEffect(() => {
      require('./js/script')
   }, [])

   return (
      <div className="__shooting_star_wrap__">
         <canvas id="canvas" />
         <p id="message">Move your mouse</p>
      </div>
   )
}

export default ShootingStar