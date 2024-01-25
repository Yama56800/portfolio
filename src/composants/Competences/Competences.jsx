import React from "react";
export default function Competences() {
  return (
    <nav className="competences">
      <ul className="tab-competences">
        <h2>Mes Compétences</h2>
        <li className="competences-item html">
          <p>HTML</p>
            93%
        </li>
        <li className="competences-item css">
          <p>CSS</p>
            93%
        </li>
        <li className="competences-item scss">
          <p>SCSS</p>
            83%
        </li>
        <li className="competences-item javascript">
          <p>JAVASCRIPT</p>
            79%
        </li>
        <li className="competences-item react">
          <p>REACT</p>
            67%
        </li>
        <li className="competences-item competences-item-last redux">
          <p>REDUX</p>
            35%
        </li>
      </ul>
    </nav>
  );
}
