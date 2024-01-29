import React, { useState } from 'react';
import axios from 'axios'; // Importez axios pour effectuer la requête HTTP POST

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Envoyez les données du formulaire au backend
      const response = await axios.post('/api/send-email', formData); // Remplacez '/api/send-email' par l'URL de votre endpoint backend
      console.log('Server response:', response.data);

      setIsSubmitted(true);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div className="form" id='contact'>
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
