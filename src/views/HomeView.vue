<template>
    <div>
      <header>
      </header>
  
      <section id="inicio">
        <h2>¡Bienvenido a Pokémon World!</h2>
        <p>En este sitio podrás encontrar información sobre el fascinante mundo de Pokémon.</p>
      </section>
  
      <section id="pokedex">
        <h2>Pokédex</h2>
        <p>Consulta información sobre diferentes Pokémon en nuestra Pokédex.</p>
        <ul>
          <li>Bulbasaur <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="Bulbasaur"></li>
          <li>Charmander <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" alt="Charmander"></li>
          <li>Squirtle <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" alt="Squirtle"></li>
          <!-- Agrega más Pokémon aquí -->
        </ul>
      </section>
  
      <section id="entrenadores">
        <h2>Entrenadores</h2>
        <p>Descubre a los mejores entrenadores y sus equipos Pokémon.</p>
        <ul>
          <li>Ash Ketchum <img src="https://i.pinimg.com/236x/9c/c7/cb/9cc7cb3b79fd0deca8f07e3951b1c6b1.jpg" alt="Ash" style="width: 100px; height: auto;"></li>
          <li>Misty <img src="https://i.pinimg.com/236x/ac/d4/8d/acd48dded75d65f7db670c75244e3363.jpg" alt="Misty" style="width: 100px; height: auto;"></li>
          <li>Brock <img src="https://i.pinimg.com/564x/de/05/96/de0596c577c326275904d4457766cf5d.jpg" alt="Brock" style="width: 100px; height: auto;"></li>
          <!-- Agrega más entrenadores aquí -->
        </ul>
      </section>
  
      <section id="noticias">
        <h2>Noticias</h2>
        <p>Mantente al día con las últimas noticias del mundo Pokémon.</p>
        <p>No hay noticias nuevas por el momento. ¡Vuelve pronto!</p>
      </section>
  
      <footer>
        <p>&copy; 2024 Pokémon World. Todos los derechos reservados.</p>
        <img src="https://cdn.icon-icons.com/icons2/2268/PNG/512/pokemon_logo_icon_139526.png" alt="Icono de Pokémon" style="width: 50px; height: auto;">
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    // Componente Vue
  }
  </script>
  
  <style>
  body {
    font-family: Arial, sans-serif;
    background-color: white; /* Cambia el fondo a blanco */
    margin: 0;
    padding: 0;
  }
  
  header {
    background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/800px-International_Pok%C3%A9mon_logo.svg.png');
    background-size: contain;
    background-position: center;
    background-color: #ffcc00;
    padding: 5%;
    text-align: center;
    color: #fff;
  }
  
  section {
    padding: 20px;
  }
  
  footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 20px;
  }
  </style>
  