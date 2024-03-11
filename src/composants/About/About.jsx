import React from "react";
import photo from "../../images/photo-profil.jpg";

export default function About() {
  return (
    <div className="out-about">
      <div className="about" id="presentation">
        <div class="overlay"></div>
        <h2> Présentons Nous !</h2>
        <div className="about-content">
          <img className="photo-profil" src={photo} alt="photo de profil" />
          <div className="description">
            <p>
              Moi ? C'est Thomas Mahias, <span>développeur front-end</span> avec
              une solide expérience en <span>React</span>. Je crée des sites web
              qui sont à la fois esthétiques et fonctionnels, en m'appuyant sur
              des fondamentaux tels que HTML, CSS, et JavaScript. Mon objectif
              est de construire des{" "}
              <span>expériences web fluides et réactives</span>, en accord avec
              les besoins spécifiques de chaque projet. Je suis toujours à la
              recherche de nouvelles collaborations pour apporter ma
              contribution à des projets innovants.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
