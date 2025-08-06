/* longer version of the props, using props as an object. Output is the same.
export default function CoreConcepts (props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
} 
*/

// shorter version of the props using destructuring. Output is the same.
// This is a more concise way to write the same component, making it easier to read and
// maintain. It directly extracts the properties from the props object passed to the component.
export default function CoreConcepts ({ title, description, image }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}
