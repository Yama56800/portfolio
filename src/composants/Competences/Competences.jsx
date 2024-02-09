import React from "react";
export default function Competences() {
  return (
    <nav className="competences" id="competences">
      <ul className="tab-competences">
        <h2>Mes Compétences</h2>
        <li className="competences-item html">
          <p><i class="fa-brands fa-html5"></i>HTML</p>
          97%
        </li>
        <li className="competences-item css">
          <p><i class="fa-brands fa-css3-alt"></i>CSS</p>
          97%
        </li>
        <li className="competences-item responsive">
          <p>Responsive</p>
          97%
        </li>
        <li className="competences-item scss">
          <p><i class="fa-brands fa-sass"></i>SCSS</p>
          93%
        </li>
        <li className="competences-item green">
          <p><i class="fa-solid fa-tree-deciduous"></i>Green code</p>
          85%
        </li>
        <li className="competences-item javascript">
         <p><i class="fa-brands fa-js"></i>JAVASCRIPT</p>
          83%
        </li>
        <li className="competences-item react">
          <p><i class="fa-brands fa-react"></i>REACT</p>
          77%
        </li>
        <li className="competences-item seo">
          <p>Référencement SEO</p>
          65%
        </li>
        <li className="competences-item redux">
          <p>REDUX</p>
          55%
        </li>
        
      </ul>
    </nav>
  );
}
