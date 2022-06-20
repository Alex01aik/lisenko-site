import './style.css';

const benefits = [
  {
    title: "Build trust in your IoT data",
    description: "Each transaction is recorded, put into a data block, and added to a secure, immutable data chain that cannot be changed — only added to."
  },
  {
    title: "Rely on added security",
    description: "With different platforms you can select the data to be managed, analyzed, customized, and shared among permissioned clients and partners."
  },
  {
    title: "Gain greater flexibility",
    description: "Many platforms are open, interoperable and is built for your multicloud world, using the latest version of the software."
  },
]

function Benefits() {
  return (
    <div className="benefits">
      {benefits.map(item => <div className="benefit" key={item.title}>
        <div className="benefits-title"><h4>{item.title}</h4></div>
        <div className="benefit-description">{item.description}</div>
      </div>)}
    </div>
  );
}

export default Benefits;
