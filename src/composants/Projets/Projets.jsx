import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


import Btn from '../Btn-rotation/Btn-rotation';

import booki from '../../images/Booki/booki.png';
import booki1 from '../../images/Booki/booki1.png';
import booki2 from '../../images/Booki/Booki2.png';

import ohmyfood from '../../images/Ohmyfood/ohmyfood.png';
import ohmyfood1 from '../../images/Ohmyfood/ohmyfood1.png';
import ohmyfood2 from '../../images/Ohmyfood/ohmyfood2.png';

import print_it from '../../images/Print_it/Print_it.png';
import print_it1 from '../../images/Print_it/print_it1.png';
import print_it2 from '../../images/Print_it/print_it2.png';

import sophie_bluel from '../../images/Sophie_bluel/sophie_bluel.png';
import sophie_bluel1 from '../../images/Sophie_bluel/sophie_bluel1.png';
import sophie_bluel2 from '../../images/Sophie_bluel/sophie_bluel2.png';

import menu_marker from '../../images/Menu_marker/menu_marker.png';
import menu_marker1 from '../../images/Menu_marker/menu_marker1.png';
import menu_marker2 from '../../images/Menu_marker/menu_marker2.png';

import kasa from '../../images/Kasa/Kasa.png';
import kasa1 from '../../images/Kasa/kasa1.png';
import kasa2 from '../../images/Kasa/kasa2.png';

import nina_carducci from '../../images/Nina_carducci/Nina_Carducci.png';
import nina_carducci1 from '../../images/Nina_carducci/nina_carducci1.png';
import nina_carducci2 from '../../images/Nina_carducci/nina_carducci2.png';

import events from '../../images/724_Events/724Events.png';
import events1 from '../../images/724_Events/724events1.png';
import events2 from '../../images/724_Events/724events2.png';

import argentbank from '../../images/Argentbank/ArgentBank.png';
import argentbank1 from '../../images/Argentbank/Argentbank1.png';
import argentbank2 from '../../images/Argentbank/Argentbank2.png';



function Modal({ isOpen, onClose, content }) {
    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <button onClick={onClose}><i className="fa fa-times" aria-hidden="true"></i></button>
                <h3>{content.title}</h3>
                <h4>{content.subTitle}</h4>
                <div className="img-content">
                    <img src={content.images_presentation1} alt={content.title} />
                    <img src={content.images_presentation2} alt={content.title} />
                </div>
                <p>{content.description}</p>
                <div className="link-content">
                    {!content.hideSiteLink && (
                        <a className="site" href={content.siteUrl} target="_blank" rel="noopener noreferrer">Visiter le Site</a>
                    )}
                    <a className="git" href={content.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
            </div>
        </div>
    );
}

export default function Projets() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState({});
    
    const projects = [
        {
            title: 'Booki',
            subTitle: 'Booki',
            image: booki,
            images_presentation1: booki1,
            images_presentation2: booki2,
            description: "Booki, un site d'hébergement et une agence de voyage, a été créé en utilisant uniquement HTML et CSS. Pendant la conception de Booki, j'ai acquis de l'expérience dans la manipulation du CSS sous divers aspects, notamment l'intégration d'icônes, d'images, de boutons et même la création de barres de recherche.",
            siteUrl: ' https://yama56800.github.io/Booki/',
            githubUrl: 'https://github.com/Yama56800/Booki',
            hideSiteLink: false,
        },
        {
            title: 'Ohmyfood',
            subTitle: 'Ohmyfood',
            image: ohmyfood,
            images_presentation1: ohmyfood1,
            images_presentation2: ohmyfood2,
            description: "Oh My Food est un site de réservation de menus en ligne pour différents restaurants, créé en utilisant HTML et SCSS. Pendant la conception de ce site, j'ai acquis de nouvelles compétences, notamment en matière d'animations, de boutons animés, d'icônes animées et même de rotations.",
            siteUrl: 'https://yama56800.github.io/ohmyfood/',
            githubUrl: 'https://github.com/Yama56800/ohmyfood',
            hideSiteLink: false,
        },
        {
            title: 'Print it!',
            subTitle: 'Print it!',
            image: print_it,
            images_presentation1: print_it1,
            images_presentation2: print_it2,
            description: "Print it!, un site d'entreprise d'impression, a été conçu en utilisant HTML et CSS. Lors de mon intervention sur leur site, j'ai intégré un carrousel en JavaScript avec des points cliquables et des flèches pour diriger le carrousel. Chaque diapositive défile automatiquement.",
            siteUrl: 'https://yama56800.github.io/print/',
            githubUrl: 'https://github.com/Yama56800/print',
            hideSiteLink: false,
        },
        {
            title: 'Sophie Bluel',
            subTitle: 'Sophie Bluel',
            image: sophie_bluel,
            images_presentation1: sophie_bluel1,
            images_presentation2: sophie_bluel2,
            description: "Le portfolio de Sophie Bluel est un site dynamique conçu en HTML, CSS et JavaScript. Lors de mon intervention sur ce site déjà existant, j'ai créé une galerie dynamique. À l'origine, le site ne comportait qu'une simple galerie d'images. J'ai ajouté des fonctionnalités permettant de trier les images, d'en ajouter à partir de l'ordinateur de l'utilisateur et de les supprimer en utilisant des appels API. Un système de connexion avec un token a également été intégré, permettant à la propriétaire du site de seule d'apporter des modifications.",
            siteUrl: '#',
            githubUrl: 'https://github.com/Yama56800/P6',
            hideSiteLink: true,
        },
        {
            title: 'Menu Marker',
            subTitle: 'Menu Marke',
            image: menu_marker,
            images_presentation1: menu_marker1,
            images_presentation2: menu_marker2,
            description: "Menu Maker est une application de création de menus. Pour ce projet, je n'ai pas effectué la programmation du site, mais j'y ai participé en tant que chef de projet. J'ai mis en place une veille technique et un tableau Kanban pour découper les différentes tâches du projet. De plus, j'ai acquis des compétences en présentation à l'aide de PowerPoint, car j'ai dû présenter de nombreuses informations à l'équipe.",
            siteUrl: '#',
            githubUrl: 'https://trello.com/b/2Pt8SZLC/menu-marker',
            hideSiteLink: true,
        },
        {
            title: 'Kasa',
            subTitle: 'Kasa',
            image: kasa,
            images_presentation1: kasa1,
            images_presentation2: kasa2,
            description: "Kasa, un site d'annonces d'hébergement de particulier à particulier, a été conçu en utilisant React. Lors de la conception de ce site, j'ai parcouru une base de données pour récupérer de nombreuses informations pour chaque annonce, chacune contenant plusieurs détails. J'ai également créé différents composants React et un design en SCSS afin de créer une application évolutive.",
            siteUrl: '#',
            githubUrl: 'https://github.com/Yama56800/Kasav1',
            hideSiteLink: true,
        },
        {
            title: 'Nina Carducci',
            subTitle: 'Nina Carducci',
            image: nina_carducci,
            images_presentation1: nina_carducci1,
            images_presentation2: nina_carducci2,
            description: "J'ai amélioré les performances et le référencement SEO du portfolio de la photographe professionnelle Nica Carducci. J'ai optimisé les images pour réduire leur taille, ajouté des rich snippets pour le référencement local en tant que photographe, et résolu les problèmes d'accessibilité et de SEO en utilisant des outils comme Waves et Google Lighthouse.",
            siteUrl: 'https://yama56800.github.io/Nina-Carducci/',
            githubUrl: 'https://github.com/Yama56800/Nina-Carducci',
            hideSiteLink: false,
        },
        {
            title: '724 Events',
            subTitle: '724 Events',
            image: events,
            images_presentation1: events1,
            images_presentation2: events2,
            description: "J'ai corrigé les nombreux bugs du site de l'agence d'événementiel 77 Events, laissés par un développeur précédent. J'ai effectué des tests unitaires et fonctionnels, notamment pour le carrousel et la galerie d'événements, en résolvant avec succès les problèmes liés à la sélection d'événements et aux listes d'éléments.",
            siteUrl: '#',
            githubUrl: 'https://github.com/Yama56800/P10-debug',
            hideSiteLink: true,
        },
        {
            title: 'Argent Bank',
            subTitle: 'Argent Bank',
            image: argentbank,
            images_presentation1: argentbank1,
            images_presentation2: argentbank2,
            description: "J'ai transformé ArgentBank, une application bancaire initialement composée de seulement 3 pages HTML et de CSS, en une application React. J'ai découpé les pages HTML en composants, intégré Redux pour gérer l'état global, et mis en place un système d'authentification pour les utilisateurs. J'ai également créé des routes API pour de futures fonctionnalités telles que la visualisation des transactions, la gestion des transactions mensuelles, la modification des transactions, les catégories personnalisées et les notes, entre autres.",
            siteUrl: '#',
            githubUrl: 'https://github.com/Yama56800/ArgentBank-website',
            hideSiteLink: true,
        },
    ];

    useEffect(() => {
        AOS.init({ duration: 3000, once: false });
    }, []);

    const openModal = (project) => {
        setSelectedProject(project);
        setModalOpen(true);
    };

    const closeModal = () => setModalOpen(false);

    return (
        <div className="projets">
            <div id="wrapper">
                <div id="content">
                    <h2>Mes Projets</h2>
                    <div className="gallery" id="realisations">
                        {projects.map((project, index) => (
                            <aside key={index} className="gallery-item-aside" onClick={() => openModal(project)} data-aos="fade-left">
                                <div className="gallery-item" data-aos="fade-up">
                                    <h3>{project.title}</h3>
                                    <img src={project.image} alt={project.title} />
                                    <div className="Btn"><Btn /></div>
                                </div>
                            </aside>
                        ))}
                    </div>
                    <Modal isOpen={modalOpen} onClose={closeModal} content={selectedProject} />
                </div>
            </div>
        </div>
    );
}