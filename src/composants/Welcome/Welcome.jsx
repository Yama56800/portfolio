import React, { useEffect } from "react";


export default function Welcome() {
    useEffect(() => {
        // Importation dynamique du script si l'installation via npm n'est pas possible
        import('https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js')
            .then(module => {
                const neonCursor = module.neonCursor;
                neonCursor({
                    el: document.getElementById('welcome'),
                    shaderPoints: 16,
                    curvePoints: 80,
                    curveLerp: 0.5,
                    radius1: 5,
                    // radius2: 0,
                    radius2: 15,
                    velocityTreshold: 10,
                    sleepRadiusX: 175,
                    sleepRadiusY: 175,
                    sleepTimeCoefX: 0.0025,
                    sleepTimeCoefY: 0.0025
                });
            })
            .catch(error => console.log('Erreur lors du chargement de threejs-toys', error));
    }, []);

    return (
        <>
        <div className="welcome" id="welcome">
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
