import React from "react";
import photo from '../../images/photo-profil.jpg';


export default function About() {
 

    return (
        <div className="out-about">
            
        <div className="about" id="presentation">
        <div class="overlay"></div>
            <h2> Présentons Nous !</h2>
            <div className="about-content">
            <img className="photo-profil" src={photo} alt="photo de profil" />
            <div className="description">
                <p>Je suis Thomas Mahias, un développeur front-end junior. Passionné par la création d'expériences 
                    web de qualité, j'utilise HTML, CSS et JavaScript pour donner vie à des designs innovants.
                     Mon approche se concentre sur la performance, l'accessibilité et l'adaptabilité aux évolutions 
                     de l'industrie. Je suis ouvert aux collaborations et prêt à contribuer à des projets excitants.
                </p>
                </div>
            </div>
            
         
        </div>
        </div>
    );
}
