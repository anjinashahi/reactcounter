
import './App.css';
import Displaycompoment from './components/Displaycomponent';
import Buttongroup from './components/Buttongroup';
import Democomponent from './components/democomponent';
import { useState } from 'react';

function App() {
  let [count, setCount] = useState(1)

  return (
    <div className="App">
      <Displaycompoment count={count} setCount={setCount}/>
      <Buttongroup count={count} setCount={setCount}/>
      {/* <Democomponent/> */}
    </div>
  );
}

export default App;
