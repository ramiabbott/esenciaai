const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");

const getDocument = async (bodyName = "new_user") => {
  const fileHTML = path.join(__dirname, bodyName + ".html");
  fs.readFile(fileHTML, "utf8", (error, data) => {
    if (error) {
      console.error("Error al leer el archivo:", error);
    } else {
      const fileHTML = data;
      // return fileHTML;
    }
  });
  return `<!DOCTYPE html>
  <html>
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Aldrich&family=Quantico&family=Readex+Pro&display=swap"
        rel="stylesheet"
      />
      <title>Felicitación de Holidays</title>
  
      <style>
        body {
          width: "100vw";
          height: "100vh";
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #1d1d1d;
          font-family: "Aldrich", sans-serif;
          color: #ffffff;
        }
        .container {
          width: 320px;
          height: 450px;
          border-radius: 10px;
          box-shadow: 0px 0px 20px #43bdbf32;
          background-image: url("https://res.cloudinary.com/dz9smi3nc/image/upload/v1695711100/Holidays/AUTH/bg2_fxokgo_scb1w4.jpg");
          background-size: cover;
          background-position: bottom;
          background-repeat: no-repeat;
          /* filter: brightness(50%); */
        }
        .logo-wrap {
          width: 100%;
          height: 15%;
        }
        .logo-wrap img {
          display: block;
          width: 100%;
          opacity: 0.8;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
        }
  
        .main-text {
          padding-left: 13px;
          padding-right: 13px;
          font-size: 15px;
          line-height: 20px;
        }
  
        footer {
          padding: 10px;
          font-size: 14px;
          color: #43bdbf;
        }
      </style>
    </head>
  
    <body>
      <div class="container">
        <div class="logo-wrap">
          <img
            src="https://res.cloudinary.com/dz9smi3nc/image/upload/v1695294447/Holidays/AUTH/logo2_pgd0ws.jpg"
            alt="Logo Holidays"
          />
        </div>
        <p class="main-text" style="color: #43bdbf">
          <strong>
            Querido
            <span id="recipient">Rama</span></strong
          >,</p
        >
  
        <p class="main-text"
          >Queremos agradecerte por ser parte de Holidays. Tu compromiso es
          invaluable y nos alegra tenerte como usuario.</p
        >
  
        <p class="main-text"
          >Tus logros y participación en Holidays son inspiradores. Tu influencia
          positiva en la comunidad es evidente.</p
        >
  
        <p class="main-text"
          >Estamos emocionados por el futuro de Holidays contigo. Queremos mejorar
          y valoramos tus comentarios. Gracias por ser parte de nuestro éxito.</p
        >
        <footer><strong>Holidays - © All Rights Reserved - 2023</strong></footer>
      </div>
  
      <script>
        const recipient = "facu";
  
        document.getElementById("recipient").textContent = recipient;
      </script>
    </body>
  </html>
  `;
};

module.exports = { getDocument };
