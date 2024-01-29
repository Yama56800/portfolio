import React, { useEffect } from "react";
import photo from '../../images/photo-profil.avif';


export default function About() {
 

    return (
        <div className="about" id="presentation">
            
            <img className="photo-profil" src={photo} alt="photo de profil" />
            <div className="description">
                <p>Je suis Thomas Mahias, un développeur web dynamique et créatif, fraîchement diplômé d'OpenClassrooms. ..</p>
            </div>
            
         
        </div>
    );
}
