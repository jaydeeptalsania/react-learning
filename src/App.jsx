import TestComponent from "./TestComponent";
import DynamicComponent from "./DynamicComponent";
import ReusableComponent from "./ReusableComponent";
import BootstrapElements from "./BootstrapElements";

function App(){
  return <div>
    <h1>Hello there</h1>
    <TestComponent/>
    <DynamicComponent/>
    <ReusableComponent/>
    <ReusableComponent/>
    <ReusableComponent/>
    <BootstrapElements/>
  </div>
  
}

export default App;