import React from 'react'
import './css/style.css'

const DynamicStyleModel = () => {
   React.useEffect(() => {
      require('./js/script')
   }, [])

   return (
      <div className="__dynamic_style_model_wrap__">
         {/* The loading element overlays all else until the model is loaded, at which point we remove this element from the DOM */}
         <div className="loading" id="js-loader">
            <div className="loader"></div>
         </div>
         {/* Just a quick notice to the user that it can be interacted with */}
         <span className="drag-notice" id="js-drag-notice">Drag to rotate 360&#176;</span>
         {/* These toggle the the different parts of the chair that can be edited, note data-option is the key that links to the name of the part in the 3D file */}
         <div className="options">
            <div className="option --is-active" data-option="legs">
               <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1376484/legs.svg" alt="" />
            </div>
            <div className="option" data-option="cushions">
               <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1376484/cushions.svg" alt="" />
            </div>
            <div className="option" data-option="base">
               <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1376484/base.svg" alt="" />
            </div>
            <div className="option" data-option="supports">
               <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1376484/supports.svg" alt="" />
            </div>
            <div className="option" data-option="back">
               <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1376484/back.svg" alt="" />
            </div>
         </div>
         {/* The canvas element is used to draw the 3D scene */}
         <canvas id="c"></canvas>
         <div className="controls">
            <div className="info">
               <div className="info__message">
                  <p><strong>&nbsp;Grab&nbsp;</strong> to rotate chair. <strong>&nbsp;Scroll&nbsp;</strong> to zoom. <strong>&nbsp;Drag&nbsp;</strong> swatches to view more.</p>
               </div>
            </div>
            {/* This tray will be filled with colors via JS, and the ability to slide this panel will be added in with a lightweight slider script (no dependency used for this) */}
            <div id="js-tray" className="tray">
               <div id="js-tray-slide" className="tray__slide"></div>
            </div>
         </div>
         <div className="frame">
            <h1 className="frame__title">3D Model Color Customizer App with Three.js</h1>
            <div className="frame__links">
               <a href="https://tympanus.net/Tutorials/webcam-audio-visualizer/">Previous demo</a>
               <a href="https://tympanus.net/codrops/?p=43333">Tutorial</a>
            </div>
         </div>
      </div>
   )
}

export default DynamicStyleModel
