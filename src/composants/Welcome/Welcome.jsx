import React, { useEffect } from "react";
import { neonCursor } from 'threejs-toys'; 

export default function Welcome() {
    useEffect(() => {
        neonCursor({
            el: document.getElementById('accueil'),
            shaderPoints: 16,
            curvePoints: 80,
            curveLerp: 0.5,
            radius1: 5,
            radius2: 3,
            velocityTreshold: 15,
            sleepRadiusX: 175,
            sleepRadiusY: 175,
            sleepTimeCoefX: 0.0025,
            sleepTimeCoefY: 0.0025
        });
    }, []);

    return (
        <>
        <div className="welcome" id="accueil">
            <div id="hero">
                <a target="_blank" href="https://github.com/klevron/threejs-toys" rel="noopener noreferrer"> </a>
                <h1> Thomas Mahias<br/>Développeur Front-End et Artiste Numérique</h1>
                
            </div>
           
          
        </div>
         <div className="scroll-downs">
         <div className="mousey">
           <div className="scroller"></div>
         </div>
       </div>
        </>
    );
}
