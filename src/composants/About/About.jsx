import React, { useEffect } from "react";
import photo from '../../images/photo-profil.jpg';
import { distribute } from "gsap";


export default function About() {
 

    return (
        <div className="out-about">
        <div className="about" id="presentation">
            
            <h2> Présentation</h2>
            <img className="photo-profil" src={photo} alt="photo de profil" />
            <div className="description">
                <p>Je suis Thomas Mahias, un développeur frontend débutant. Passionné par la création d'expériences 
                    web de qualité, j'utilise HTML, CSS et JavaScript pour donner vie à des designs innovants.
                     Mon approche se concentre sur la performance, l'accessibilité et l'adaptabilité aux évolutions 
                     de l'industrie. Je suis ouvert aux collaborations et prêt à contribuer à des projets excitants.
                </p>
            </div>
            
         
        </div>
        </div>
    );
}
