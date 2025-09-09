import CoreConcept from './CoreConcept.jsx';
import { CORE_CONCEPTS } from '../data.js';

export default function CoreConcepts() {
    return (
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
    );
}