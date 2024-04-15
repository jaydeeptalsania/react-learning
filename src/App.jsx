import TestComponent from "./TestComponent";
import DynamicComponent from "./DynamicComponent";
import ReusableComponent from "./ReusableComponent";
import BootstrapElements from "./BootstrapElements";
import MapMethod from "./MapMethod";

function App(){
  return <>
    <h1>Hello there</h1>
    <TestComponent/>
    <DynamicComponent/>
    <ReusableComponent/>
    <ReusableComponent/>
    <ReusableComponent/>
    <BootstrapElements/>
    <MapMethod/>
  </>
  
}

export default App;