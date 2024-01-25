import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false); // État pour suivre si le formulaire a été soumis

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, ajoutez votre logique pour gérer l'envoi des données du formulaire (par exemple, à une API)
    console.log('Form data submitted:', formData);
    setIsSubmitted(true); // Mettre à jour l'état lors de la soumission
  };

  return (
    <div className="form">
      <div className="contact-form">
        <h2>DÉMARRONS UN PROJET ENSEMBLE, N'HÉSITEZ PAS À ME CONTACTER</h2>
        {!isSubmitted ? (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nom"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Adresse e-mail"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Votre message"
                required
              />
            </div>
            <button type="submit">ME CONTACTER</button>
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

export default ContactForm;
