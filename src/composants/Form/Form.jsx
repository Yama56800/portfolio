import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const schema = yup.object({
    name: yup.string().max(50).required('Merci de rentrer votre nom et prénom'),
    email: yup.string().email('Merci de renter une adresse mail valide').max(255).required('Merci de rentrer une adresse mail'),
    phone: yup.number().typeError('Merci de rentrer un numéro de téléphone valide').required('Merci de rentrer un numéro de téléphone'),
    message: yup.string().required('Merci de rentrer un message'),
  }).required();

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = data => {
    const templateId = 'template_5yb1elr';
    const serviceId = 'service_5ekk2xg';
    const userId = '1pE5dkAnWFR8sGczr'; 

    emailjs.send(serviceId, templateId, data, userId)
      .then((response) => {
        console.log('Message sent successfully', response.status, response.text);
        setIsSubmitted(true); 
        reset(); 
      })
      .catch((err) => console.error('Failed to send the message, error:', err));
  };

  return (
    <div className="form" id='contact'>
      <div className="contact-form">
      <h2>DÉMARRONS UN PROJET ENSEMBLE, N'HÉSITEZ PAS À ME CONTACTER</h2>
      {!isSubmitted ? (
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
          <label htmlFor="name" className="label-contact">
            
          </label>
          <input
            className="input-contact"
            type="text"
            id="name"
            nanme="name"
            placeholder="Nom et Prenom"
            {...register('name')}
          />
          {errors.name && <p id="c-yup">{errors.name.message}</p>}
          <label htmlFor="email" className="label-contact">
            
          </label>
          <input
            className="input-contact"
            type="email"
            id="email"
            nanme="email"
            placeholder="exemple@gmail.com"
            {...register('email')}
          />
          {errors.email && <p id="c-yup">{errors.email.message}</p>}
          <label htmlFor="phone" className="label-contact">
           
          </label>
          <input
            className="input-contact"
            type="text"
            id="phone"
            nanme="phone"
            placeholder="+12345678"
            {...register('phone')}
          />
          {errors.phone && <p id="c-yup">{errors.phone.message}</p>}
          <label htmlFor="Sujet" className="label-contact">
            
          </label>
          <select
            className="select-contact"
            name="Subject"
            {...register('subject')}
          >
            
            <option value="devis">Devis</option>
            <option value="questions">Questions</option>
            <option value="Autre">Autre</option>
          </select>

          <label htmlFor="message" className="label-contact">
            {' '}
            
          </label>
          <textarea
            className="message-contact"
            placeholder="Merci de renseigner vos questions ou commentaires"
            id="message"
            cols="20"
            rows="10"
            name="message"
            {...register('message')}
          ></textarea>
          {errors.message && <p id="c-yup">{errors.message.message}</p>}
         

          <button type="submit">ME CONTACTER</button>
        </div>
        </form>
        ) : (
          <div className="form-submitted-message">
            Votre message a été envoyé. Merci de nous avoir contacté !
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;