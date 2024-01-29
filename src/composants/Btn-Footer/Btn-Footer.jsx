import React, { useEffect, useRef } from 'react';
import github from '../../images/icon/icons8-github.svg';
import linkedin from '../../images/icon/icons8-linkedin.svg';
import mail from '../../images/icon/icons8-courrier-50.png';

const GravityButton = () => {
  const gravityButtonsRef = useRef(null);

  useEffect(() => {
    const buttons = gravityButtonsRef.current.querySelectorAll('.gravityButton');

    const handleMouseMove = (e, btn) => {
      const rect = btn.getBoundingClientRect();
      const h = rect.width / 2;
      const x = e.clientX - rect.left - h;
      const y = e.clientY - rect.top - h;
      const r1 = Math.sqrt(x * x + y * y);
      const r2 = (1 - (r1 / h)) * r1;
      const angle = Math.atan2(y, x);
      const tx = Math.round(Math.cos(angle) * r2 * 100) / 100;
      const ty = Math.round(Math.sin(angle) * r2 * 100) / 100;
      const op = (r2 / r1) + 0.25;

      btn.style.setProperty('--tx', `${tx}px`);
      btn.style.setProperty('--ty', `${ty}px`);
      btn.style.setProperty('--opacity', `${op}`);
    };

    const handleMouseLeave = (btn) => {
      btn.style.setProperty('--tx', '0px');
      btn.style.setProperty('--ty', '0px');
      btn.style.setProperty('--opacity', '0.25');
    };

    buttons.forEach(btn => {
      btn.addEventListener('mousemove', (e) => handleMouseMove(e, btn));
      btn.addEventListener('mouseleave', () => handleMouseLeave(btn));
    });

    return () => {
      buttons.forEach(btn => {
        btn.removeEventListener('mousemove', (e) => handleMouseMove(e, btn));
        btn.removeEventListener('mouseleave', () => handleMouseLeave(btn));
      });
    };
  }, []);

  return (
    <div className="gravity-container" ref={gravityButtonsRef}>
      <div className="gravityButton">
        <button href="https://github.com/Yama56800">
            <a href="https://github.com/Yama56800" target="_blank" rel="noopener noreferrer">
                <svg className="github" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"/></svg>
           </a>  
        </button>
      </div>

      <div className="gravityButton">
        <button >
            <a href="https://linkedin.com/your-profile-link" target="_blank" rel="noopener noreferrer">   
                <svg className="linkedin" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="64px" height="64px"><path d="M48,8H16c-4.418,0-8,3.582-8,8v32c0,4.418,3.582,8,8,8h32c4.418,0,8-3.582,8-8V16C56,11.582,52.418,8,48,8z M24,47h-5V27h5 V47z M24.029,23.009C23.382,23.669,22.538,24,21.5,24c-1.026,0-1.865-0.341-2.519-1.023S18,21.458,18,20.468 c0-1.02,0.327-1.852,0.981-2.498C19.635,17.323,20.474,17,21.5,17c1.038,0,1.882,0.323,2.529,0.969 C24.676,18.615,25,19.448,25,20.468C25,21.502,24.676,22.349,24.029,23.009z M47,47h-5V35.887C42,32.788,40.214,31,38,31 c-1.067,0-2.274,0.648-2.965,1.469S34,34.331,34,35.594V47h-5V27h5v3.164h0.078c1.472-2.435,3.613-3.644,6.426-3.652 C44.5,26.5,47,29.5,47,34.754V47z"/></svg>
            </a>  
        </button>
      </div>

      <div className="gravityButton">
        <button>
            <a href="mailto:thomawmahiaw@gmail.com">
                <svg className="mail" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 88.86"><title>email</title><path d="M7.05,0H115.83a7.07,7.07,0,0,1,7,7.05V81.81a7,7,0,0,1-1.22,4,2.78,2.78,0,0,1-.66,1,2.62,2.62,0,0,1-.66.46,7,7,0,0,1-4.51,1.65H7.05a7.07,7.07,0,0,1-7-7V7.05A7.07,7.07,0,0,1,7.05,0Zm-.3,78.84L43.53,40.62,6.75,9.54v69.3ZM49.07,45.39,9.77,83.45h103L75.22,45.39l-11,9.21h0a2.7,2.7,0,0,1-3.45,0L49.07,45.39Zm31.6-4.84,35.46,38.6V9.2L80.67,40.55ZM10.21,5.41,62.39,47.7,112.27,5.41Z"/></svg> 
            </a>
        </button>
    </div>
    </div>
  );
};

export default GravityButton;
