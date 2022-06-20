import Application from "../Application";
import Benefits from "../Benefits";
import Fin from "../Fin";
import HowItWorks from "../HowItWorks";
import "./style.css"

const Main = () => {
  return (
    <main>
      <HowItWorks />
      <Benefits />
      <Application />
      <Fin />
    </main>
  );
}

export default Main;
