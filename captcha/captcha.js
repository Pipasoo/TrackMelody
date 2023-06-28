const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/enviar-formulario', (req, res) => {
  const token = req.body['g-recaptcha-response'];
  const secretKey = '6LesNtImAAAAAHrLCyoqQ6N7GrXBD0s_mLX2F0lP'; // Reemplaza con tu clave secreta de reCAPTCHA

  axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`)
    .then(response => {
      const { success } = response.data;
      if (success) {
        // El reCAPTCHA es válido, procesa el formulario
        // Aquí puedes agregar tu lógica para guardar los datos del formulario
        res.send('Formulario enviado correctamente.');
      } else {
        // El reCAPTCHA es inválido, muestra un mensaje de error
        res.status(400).send('Error: Por favor, completa el reCAPTCHA.');
      }
    })
    .catch(error => {
      console.error('Error al verificar el reCAPTCHA: ', error);
      res.status(500).send('Error interno del servidor.');
    });
});

app.listen(3000, () => {
  console.log('Servidor iniciado en http://localhost:3000');
});
