import './App.css';
import User from './User.js';
/*
function App() {

  let data="Prashant Bhati"
  return (
    <div className="App">
      <h1>Parent Component</h1>
      <User data={data}/>
    </div>
  );
}

export default App;

//////Passing data from parent to child
*/


function App() {

  function parent(data)
  {
    console.log(data)
  }
  return (
    <div className="App">
      <h1>Parent Component</h1>
      <User data={parent}/>
    </div>
  );
}

export default App;