import imageSrc from '../assets/react-core-concepts.png';
import './Header.css'; // Assuming you have a CSS file for styling the header

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1)); // Generates a random integer between 0 and max (inclusive)
  // For example, genRandomInt(2) will return 0, 1, or 2
  // This is useful for selecting a random description from the reactDescriptions array
  // which has 3 elements (0, 1, and 2).
}

export default function Header () {
  const description = reactDescriptions[genRandomInt(2)]; // Generates a random index between 0 and 2

  return (
    <header>
      <img src={imageSrc} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  )
}