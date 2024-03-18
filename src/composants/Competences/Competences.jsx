import React from "react";
import { SiAdobephotoshop, SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export default function Competences() {
  return (
    <nav className="competences" id="competences">
      <ul className="tab-competences">
        <h2>Mes Compétences</h2>
        <li className="competences-item react">
          <p>
            <i class="fa-brands fa-react"></i>REACT
          </p>
        </li>
        <li className="competences-item scss">
          <p>
            <i class="fa-brands fa-sass"></i>SCSS
          </p>
        </li>{" "}
        <li className="competences-item nextjs">
          <p>
            <TbBrandNextjs />
            NEXT JS
          </p>
        </li>
        <li className="competences-item responsive">
          <p>
            <i class="fa-light fa-laptop-mobile"></i>Responsive / Phone
          </p>
        </li>
        <li className="competences-item green">
          <p>
            <i class="fa-solid fa-tree-deciduous"></i>Green code
          </p>
        </li>
        <li className="competences-item seo">
          <p>
            <i class="fa-regular fa-user-magnifying-glass"></i>Référencement SEO
          </p>
        </li>
        <li className="competences-item photoshop">
          <p>
            <SiAdobephotoshop /> PhotoShop
          </p>
        </li>
        <li className="competences-item redux">
          <p>
            <i class="fa-light fa-users-gear"></i>REDUX
          </p>
        </li>
        <li className="competences-item typescript">
          <p>
            <SiTypescript /> TYPESCRIPT
          </p>
        </li>
        <li className="competences-item tailwind">
          <p>
            <SiTailwindcss />
            TAILWIND CSS
          </p>
        </li>
      </ul>
    </nav>
  );
}
