import "./Header.css";
const reactDescriptions = ['Fundamental', 'Essential', 'Core', 'Concepts'];

function genRandomInt(max){
  return Math.floor(Math.random() * max);
}

export function Header() {
  return(
    <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {reactDescriptions[genRandomInt(3)]} React concepts you will need for almost any app you are
          going to build!
        </p>
    </header>
  )
}