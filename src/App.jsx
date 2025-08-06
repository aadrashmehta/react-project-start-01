import { useState } from 'react';

import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data.js';

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
		setSelectedTopic(selectedButton);
    console.log(selectedButton);
	}

  let tabContent = <p>Please select a topic.</p>;

  if(selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{ EXAMPLES[selectedTopic].title }</h3>
        <p>{ EXAMPLES[selectedTopic].description }</p>
        <pre>
          <code>
            { EXAMPLES[selectedTopic].code }
          </code>
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
            {/* Using concept of outputting list dynamically */}
            {CORE_CONCEPTS.map((conceptItem, index) => (<CoreConcept key={index} {...conceptItem} />))}

            {/* Using spread operator to pass props */}
            {/* <CoreConcept 
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/> */}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic=='components'} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic=='jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic=='props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic=='state'} onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>

          {/* Using conditional operators */}
          {/* { !selectedTopic ? (<p>Please select a topic.</p>) : null }
          { selectedTopic ? (
            <div id="tab-content">
              <h3>{ EXAMPLES[selectedTopic].title }</h3>
              <p>{ EXAMPLES[selectedTopic].description }</p>
              <pre>
                <code>
                  { EXAMPLES[selectedTopic].code }
                </code>
              </pre>
            </div>
            ) : null 
          } */}

          {tabContent}

        </section>
      </main>
    </div>
  );
}

export default App;
