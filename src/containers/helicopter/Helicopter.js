import React from 'react'
import './css/style.css'

const Helicopter = () => {
   React.useEffect(() => {
      require('./js/script')
   }, [])

   return (
      <div className="__helicopter_wrap__">
         <div className="game-holder" id="gameHolder">
            <div className="header">
               <h1><span>the</span>Aviator</h1>
               <h2>fly it to the end</h2>
               <div className="score" id="score">
                  <div className="score__content" id="level">
                     <div className="score__label">level</div>
                     <div className="score__value score__value--level" id="levelValue">1</div>
                     <svg className="level-circle" id="levelCircle" viewBox="0 0 200 200">
                        <circle id="levelCircleBgr" r="80" cx="100" cy="100" fill="none" stroke="#d1b790" strokeWidth="24px" />
                        <circle id="levelCircleStroke" r="80" cx="100" cy="100" fill="none" stroke="#68c3c0" strokeWidth="14px" strokeDasharray="502" />
                     </svg>
                  </div>
                  <div className="score__content" id="dist">
                     <div className="score__label">distance</div>
                     <div className="score__value score__value--dist" id="distValue">000</div>
                  </div>
                  <div className="score__content" id="energy">
                     <div className="score__label">energy</div>
                     <div className="score__value score__value--energy" id="energyValue">
                        <div className="energy-bar" id="energyBar"></div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="world" id="world"></div>
            <div className="message message--replay" id="replayMessage">Click to Replay</div>
            <div className="message message--instructions" id="instructions">Grab the blue pills<span>avoid the red ones</span></div>
         </div>
         {/* Demo links */}
         <nav className="meta">
            <a className="codrops-icon codrops-icon--prev" href="http://tympanus.net/Development/Interactive3DMallMap/" title="Previous Demo"><span>Previous Demo</span></a>
            <a className="codrops-icon codrops-icon--drop" href="http://tympanus.net/codrops/?p=26501" title="Back to the article"><span>Back to the Codrops article</span></a>
            <a className="demo-link" href="part1.html">Part 1</a>
            <a className="demo-link" href="part2.html">Part 2</a>
         </nav>
         <div className="partisan">
            <svg className="partisan__bg" viewBox="0 0 500 188" preserveAspectRatio="none" width="100%" height="100%" aria-hidden="true">
               <polygon points="0 154 123.39 0 235.78 14.79 365.6 28.9 436.24 114.93 500 188 0 188 0 154" fill="#bed730" />
               <polygon points="0 188 108.84 18.17 347.91 26.79 500 188 365.6 28.9 123.39 0 0 154 0 188" fill="#dde465" />
            </svg>
            <a className="partisan__link" href="https://goo.gl/oECseP" rel="nofollow">
               <img className="partisan__img" src="/assets/helicopter/img/Partisan_Bushel.png" alt="Bushel: Easily manage all your Apple devices at work" />
               <h3 className="partisan__title">Bushel: Easily manage all your Apple devices at work</h3>
            </a>
         </div>
      </div>
   )
}

export default Helicopter