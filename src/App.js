import React, { useEffect, useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Team from "./components/Team";
import FormSteps from "./FormSteps";



function App() {

  const [primaryColor, setPrimaryColor] = useState('#ea5551');
  document.documentElement.style.setProperty('--primary-color', primaryColor);

  const [components, setComponents] = useState([<Hero/>,<Team/>,<Section3/>,<Section4/>]);

  const handleDown = (index) => {
   if(index !== 3) {
    const element = components.splice(index, 1)[0];
    components.splice(index + 1, 0, element);
    setComponents([...components]);
   }
  }

  const handleUp = (index) => {
    if(index !== 0) {
      const element = components.splice(index, 1)[0];
      components.splice(index - 1, 0, element);
      setComponents([...components]);
     }
  }

  return (
    <>
    <FormSteps/>
      {
        components.map((component, index) => (
          <section key={index}>
           {React.cloneElement(component, { index: index , handleDown: handleDown, handleUp: handleUp, setPrimaryColor})}
          </section>
        ))
      }
    </>
  );
}

export default App;
