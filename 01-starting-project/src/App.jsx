import {CORE_CONCEPTS} from './data.js';
import { EXAMPLES } from './data.js'; 
import {Header }from './components/Header/Header.jsx';
import {CoreConcepts} from "./components/CoreConcept.jsx";
import TabButton from './components/TabButton.jsx';
import { useState } from 'react';

function App() {
  const [selectedTopics, setSelectedTopics] = useState('components');
  function hendleSelect(selected) {
    setSelectedTopics(selected);
    console.log('selected topic:', selected);
  }
  console.log('app rendered');
  return (
    <div>
      <Header />
      <main> 
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts {...CORE_CONCEPTS[0]}/>
            <CoreConcepts {...CORE_CONCEPTS[1]}/>
            <CoreConcepts {...CORE_CONCEPTS[2]}/>
            <CoreConcepts {...CORE_CONCEPTS[3]}/>

          </ul>
          <h2>Time to get started!</h2>
        </section>
        <section id='examples'>
          <h2>Example</h2>
          <menu>
            <TabButton onSelect={()=> hendleSelect('components') }>Conponents</TabButton>
            <TabButton onSelect={()=> hendleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={()=> hendleSelect('props')}>Props</TabButton>
            <TabButton onSelect={()=> hendleSelect('state')}>State</TabButton>
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopics].title}</h3>
            <p>{EXAMPLES[selectedTopics].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopics].code}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
