import TestComponent from "./TestComponent";
import DynamicComponent from "./DynamicComponent";
import ReusableComponent from "./ReusableComponent";
import BootstrapElements from "./BootstrapElements";
import MapMethod from "./MapMethod";
import Props from "./Props";

function App(){
  const name = "Jaydeep";
  const surname = "Talsania";
  return <>
    <h1>Hello there</h1>
    <TestComponent/>
    <DynamicComponent/>
    <ReusableComponent/>
    <ReusableComponent/>
    <ReusableComponent/>
    <BootstrapElements/>
    <MapMethod/>
    <Props myName={name} mySurname={surname}/>
  </>
  
}

export default App;