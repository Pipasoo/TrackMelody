const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000; // Puedes cambiar el número de puerto según tus necesidades

// Ruta para verificar el reCAPTCHA
app.post('/verify-recaptcha', (req, res) => {
  const { recaptchaResponse } = req.body;

  axios
    .post('https://www.google.com/recaptcha/api/siteverify', null, {
      params: {
        secret: 'TU_SECRET_KEY',
        response: recaptchaResponse,
      },
    })
    .then(response => {
      const { success } = response.data;

      if (success) {
        // El reCAPTCHA es válido
        res.json({ success: true });
      } else {
        // El reCAPTCHA es inválido
        res.json({ success: false });
      }
    })
    .catch(error => {
      console.error('Error al verificar el reCAPTCHA:', error);
      res.status(500).json({ success: false });
    });
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
