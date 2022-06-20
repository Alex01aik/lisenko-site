import ApplicationItem from "./ApplicationItem";
import "./style.css";

const items = [
  {
    url: "./images/truck.svg",
    title: "Freight transportation",
    desc: "Moving freight is a complex process involving different parties with different priorities. An IoT-enabled blockchain can store the temperatures, position, arrival times, and status of shipping containers as they move. Immutable blockchain transactions help ensure that all parties can trust the data and take action to move products quickly and efficiently."
  },
  {
    url: "./images/plane.png",
    title: "Component tracking and compliance",
    desc: "The ability to track components that go into an aircraft, automobile, or other products is critical for both safety and regulatory compliance. IoT data stored in shared blockchain ledgers enables all parties to see component provenance throughout a product’s life. Sharing this information with regulatory agencies, shippers, and manufacturers is secure, easy, and cost-effective."
  },
  {
    url: "./images/tools.png",
    title: "Log operational maintenance data",
    desc: "IoT devices track the state of safety for critical machines and their maintenance. From engines to elevators, blockchain provides for a tamper-free ledger of operational data and the resulting maintenance. Third-party repair partners can monitor the blockchain for preventive maintenance and record their work back on the blockchain. Operational records can also be shared with government entities to verify compliance."
  }
]

const Application = () => {
  return (
    <div className="application">
      <h3 className="application-label">Applications of IoT and blockchain</h3>
      <div className="application-items">
        {items.map(item => <ApplicationItem key={item.title} {...item} />)}
      </div>
    </div>
  );
}

export default Application;
  