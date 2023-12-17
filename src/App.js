import './App.css';
import React, {useState} from 'react';

function App() {
  const quotes = [
    {
    text: '"No hay que ir para atras ni para darse impulso"',
    author: 'Lao Tsé'            },
    {
    text: '"No hay caminos para la paz; la paz es el camino"',
    author: 'Mahatma Gandhi'
    },
    {
    text: '"Haz el amor y no la guerra"',
    author: 'John Lennon'
    },
    {
    text: '"Para trabajar basta estar convencido de una cosa: que trabajar es menos aburrido que divertirse"',
    author: 'Charles Baudelaire'
    },
    {
    text: '"Lo peor que hacen los malos es obligarnos a dudar de los buenos"',
    author: 'Jacinto Benavente'
    },
    {
    text: '"Las guerras seguiran mientras el color de la piel siga siendo mas importante que el de los ojos"',
    author: 'Bob Marley'
    },
    {
    text: '"Aprende a vivir y sabras morir bien"',
    author: 'Confucio'
    },
    {
    text: '"Cada dia sabemos mas y entendemos menos"',
    author: 'Albert Einstein'
    },
    {
    text: '"El mundo no esta en peligro por las malas personas sino por aquellas que permiten la maldad"',
    author: 'Albert Einstein'
    },
    {
    text: '"La medida del amor es amar sin medida"',
    author: 'San Agustin'
    },
    {
    text: '"No hay nada que un hombre no sea capaz de hacer cuando una mujer le mira"',
    author: 'Casanova'
    },
    {
    text: '"Dar el ejemplo no es la principal manera de influir sobre los demas; es la única manera"',
    author: 'Albert Einstein'
    },
    {
    text: '"El dinero no puede comprar la vida"',
    author: 'Bob Marley'
    },
    {
    text: '"Si es bueno vivir, todavía es mejor soñar, y lo mejor de todo, despertar"',
    author: 'Antonio Machado'
    },
    {
    text: '"La mayor declaracion de amor es la que no se hace; el hombre que siente mucho, habla poco"',
    author: 'Platón'
    },
    {
    text: '"Si das pescado a un hombre hambriento lo nutres durante una jornada. Si le enseñas a pescar, lo nutrirás toda su vida"',
    author: 'Lao Tsé'
    },
    {
    text: '"El poder no cambia a las personas, solo revela quiénes son relamente"',
    author: 'Meryl Streep'
    },
    {
    text: '"Ningún hombre es lo bastante bueno para gobernar a otros sin su consentimiento"',
    author: 'Abraham Lincoln'
    },
    {
    text: '"Todo lo que se come sin necesidad se roba al estomago de los pobres"',
    author: 'Mahatma Gandhi'
    },
    {
    text: '"Vivir sola es como estar en una fiesta donde nadie te hace caso"',
    author: 'Marilyn Monroe'
    }
];
    
let randomIndex = Math.floor(Math.random()*quotes.length);
let randomQoute = quotes[randomIndex];

const [currentQuote, setCurrentQuote] = useState({
    text: randomQoute.text,
    author: randomQoute.author});

const handleClick = () =>{
    randomIndex = Math.floor(Math.random()*quotes.length);
    randomQoute = quotes[randomIndex];
    
    setCurrentQuote(randomQoute);
}
  return (
    <div className="App" id="quote-box">
      <header className="App-header">
        <blockquote>
          <p id="text">{currentQuote.text}</p>
          <footer id="author">{currentQuote.author}</footer>
        </blockquote>
        <button className="App-button" id="new-quote" onClick={handleClick}>
          Nueva Cita
        </button>
        <a className = "App-link" id="Tweet-quote" href = "https://twitter.com/intent/tweet">
          Tweet Cita
        </a>
      </header>
    </div>
  );
}

export default App;
