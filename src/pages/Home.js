import react from 'react'
import '../css/style.css'

const Home = () => {
    return (
        <div class="container">
          <div class="left">
            <img src="https://img.freepik.com/vector-premium/autenticacion-otp-verificacion-segura-nunca-comparta-concepto-otp-detalles-bancarios_70921-2084.jpg?w=826"/>
          </div>
          <div class="right">
            <h1>UNIVERSIDAD DE LAS FUERZAS ARMADAS ESPE</h1>
            <center>
              <h2>LUIS DAVID CALVOPIÑA GRANDA</h2>
              <h3>NRC: 8500</h3>
              <h3>Bienvenido al mundo de los ciberriesgos</h3>
              <p>Más información <a href="data"><b>aquí</b></a></p>
              <img src="https://www.pngmart.com/files/11/Hacker-PNG-Image.png" height="450" width="450"/>
            </center>
          </div>
        </div>
    )
}

export default Home