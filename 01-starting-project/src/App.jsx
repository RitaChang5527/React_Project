import {CORE_CONCEPTS} from './data.js';
import { EXAMPLES } from './data.js'; 
import {Header }from './components/Header/Header.jsx';
import {CoreConcepts} from "./components/CoreConcept.jsx";
import TabButton from './components/TabButton.jsx';
import { useState } from 'react';

function App() {
  const [selectedTopics, setSelectedTopics] = useState('');
  function hendleSelect(selected) {
    setSelectedTopics(selected);
    console.log('selected topic:', selected);
  }
  console.log('app rendered');
  let tabContent = <p>Please selected topic</p>
  if (selectedTopics) {
    tabContent =(
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopics].title}</h3>
        <p>{EXAMPLES[selectedTopics].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopics].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main> 
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem)=>(
              <CoreConcepts key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
          <h2>Time to get started!</h2>
        </section>
        <section id='examples'>
          <h2>Example</h2>
          <menu>
            <TabButton isSelected={selectedTopics === 'components'} onSelect={()=> hendleSelect('components') }>Conponents</TabButton>
            <TabButton isSelected={selectedTopics === 'jsx'} onSelect={()=> hendleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopics === 'props'} onSelect={()=> hendleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopics === 'state'} onSelect={()=> hendleSelect('state')}>State</TabButton>
          </menu>
          {tabContent}   
        </section>
      </main>
    </div>
  );
}

export default App;
