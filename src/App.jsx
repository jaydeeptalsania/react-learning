import TestComponent from "./TestComponent";
import DynamicComponent from "./DynamicComponent";
import ReusableComponent from "./ReusableComponent";

function App(){
  return <div>
    <h1>Hello there</h1>
    <TestComponent/>
    <DynamicComponent/>
    <ReusableComponent/>
    <ReusableComponent/>
    <ReusableComponent/>
  </div>
  
}

export default App;