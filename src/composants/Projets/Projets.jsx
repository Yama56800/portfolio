import React from "react";
import booki from '../../images/booki.png';
import ohmyfood from '../../images/ohgmyfood.png';
import Print_it from '../../images/Print-it.png';
import Sophie_Bluel from '../../images/sophie-bluel.png';
import Menu_Marker from '../../images/menu-marker.png';
import Kasa from '../../images/Kasa.png';
import Nina_Carducci from '../../images/Nina-Carducci.png';
import Events from '../../images/724Events.png';
import ArgentBank from '../../images/ArgentBank.png';
import Btn from '../Btn-rotation/Btn-rotation'
export default function Projets() {
  

    return (
        <div className="projets">
          <h2>Mes Projets</h2>

          <div className="gallery">

            <div className="gallery-item">
                <h3>Booki</h3>
                <img src={booki} alt="booki" />
                <div className="Btn"><Btn></Btn></div>
            </div>
            <div className="gallery-item">
                <h3>Ohmyfood</h3>
                <img src={ohmyfood} alt="Ohmyfood" />
            </div>
            <div className="gallery-item">
                <h3>Print it! </h3>
                <img src={Print_it} alt="Print it!" />
            </div>
            <div className="gallery-item">
                <h3>Sophie Bluel </h3>
                <img src={Sophie_Bluel} alt="Sophie Bluel" />
            </div>
            <div className="gallery-item">
                <h3>Menu Marker </h3>
                <img src={Menu_Marker} alt="Menu Marker" />
            </div>
            <div className="gallery-item">
                <h3>Kasa </h3>
                <img src={Kasa} alt="Kasa" />
            </div>
            <div className="gallery-item">
                <h3>Nica Carducci </h3>
                <img src={Nina_Carducci} alt=">Nica Carducci" />
            </div>
            <div className="gallery-item">
                <h3>724 Events </h3>
                <img src={Events} alt="724 Events" />
            </div>
            <div className="gallery-item">
                <h3>Argent Bank </h3>
                <img src={ArgentBank} alt="Argent Bank" />
            </div>




          </div>

        </div>
    );
}
