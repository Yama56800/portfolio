import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';


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
import argentbank1 from '../../images/Argentbank/ArgentBank.png';
import argentbank2 from '../../images/Argentbank/ArgentBank.png';

import data from '../../../src/data.json';

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
                    <a href={content.siteUrl} target="_blank" rel="noopener noreferrer">Visiter le Site</a>
                    <a href={content.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
            </div>
        </div>
    );
}

export default function Projets() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState({});
    const content = document.querySelector('#content');

    
    const projects = [
        {
            title: 'Booki',
            subTitle: 'Booki',
            image: booki,
            images_presentation1: booki1,
            images_presentation2: booki2,
            description: 'Description de Booki.',
            siteUrl: 'https://booki.com',
            githubUrl: 'https://github.com/user/booki',
        },
        {
            title: 'Ohmyfood',
            subTitle: 'Ohmyfood',
            image: ohmyfood,
            images_presentation1: ohmyfood1,
            images_presentation2: ohmyfood2,
            description: 'Description de Ohmyfood.',
            siteUrl: 'https://ohmyfood.com',
            githubUrl: 'https://github.com/user/ohmyfood',
        },
        {
            title: 'Print it!',
            subTitle: 'Print it!',
            image: print_it,
            images_presentation1: print_it1,
            images_presentation2: print_it2,
            description: 'Description de Print it!.',
            siteUrl: 'https://printit.com',
            githubUrl: 'https://github.com/user/printit',
        },
        {
            title: 'Sophie Bluel',
            subTitle: 'Sophie Bluel',
            image: sophie_bluel,
            images_presentation1: sophie_bluel1,
            images_presentation2: sophie_bluel2,
            description: 'Description de Sophie Bluel.',
            siteUrl: 'https://sophiebluel.com',
            githubUrl: 'https://github.com/user/sophiebluel',
        },
        {
            title: 'Menu Marker',
            subTitle: 'Sous-titre de Menu Marker',
            image: menu_marker,
            images_presentation1: menu_marker1,
            images_presentation2: menu_marker2,
            description: 'Description de Menu Marker.',
            siteUrl: 'https://menumarker.com',
            githubUrl: 'https://github.com/user/menumarker',
        },
        {
            title: 'Kasa',
            subTitle: 'Sous-titre de Kasa',
            image: kasa,
            images_presentation1: kasa1,
            images_presentation2: kasa2,
            description: 'Description de Kasa.',
            siteUrl: 'https://kasa.com',
            githubUrl: 'https://github.com/user/kasa',
        },
        {
            title: 'Nina Carducci',
            subTitle: 'Sous-titre de Nina Carducci',
            image: nina_carducci,
            images_presentation1: nina_carducci1,
            images_presentation2: nina_carducci2,
            description: 'Description de Nina Carducci.',
            siteUrl: 'https://ninacarducci.com',
            githubUrl: 'https://github.com/user/ninacarducci',
        },
        {
            title: '724 Events',
            subTitle: 'Sous-titre de 724 Events',
            image: events,
            images_presentation1: events1,
            images_presentation2: events2,
            description: 'Description de 724 Events.',
            siteUrl: 'https://724events.com',
            githubUrl: 'https://github.com/user/724events',
        },
        {
            title: 'Argent Bank',
            subTitle: 'Sous-titre de Argent Bank',
            image: argentbank,
            images_presentation1: argentbank1,
            images_presentation2: argentbank2,
            description: 'Description de Argent Bank.',
            siteUrl: 'https://argentbank.com',
            githubUrl: 'https://github.com/user/argentbank',
        },
    ];

    useEffect(() => {
        AOS.init({
            duration: 3000,
            once: false,
        });

        gsap.registerPlugin(ScrollTrigger);

        // Créez vos éléments "circle" ici (code pour créer des cercles).

        const Circles = document.querySelectorAll('.circle');

        const main = gsap.timeline({
            scrollTrigger: {
                scrub: 0.7,
                start: "top 25%",
                end: "bottom bottom"
            }
        });

        Circles.forEach((circle) => {
            main.to(circle, {
                opacity: 1,
            });
        });

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
                            <aside key={index} className="gallery-item" onClick={() => openModal(project)} data-aos="fade-left">
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
            <div className="scroll">
                <span>SCROLL</span>
                <svg viewBox="0 0 24 24">
                    <line className="st1" x1="12" y1="1" x2="12" y2="22.5" />
                    <line className="st1" x1="12.1" y1="22.4" x2="18.9" y2="15.6" />
                    <line className="st1" x1="11.9" y1="22.4" x2="5.1" y2="15.6" />
                </svg>
            </div>
        </div>
    );
}
