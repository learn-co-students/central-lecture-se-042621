import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import data from './data'
import GenerateComponent from './GenerateComponent'

function App() {
  const firstName = "Jacob";
  
  return (
    <div className="App">
      
      { data.content.body.map(profile => GenerateComponent(profile)) }
    </div>
  )

  // if(firstName == "Louis") {
  //   return (
  //     <div className="App">
  //         <Header name="Louis" />
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div className="App">
  //         <Header name="Joe" />
  //     </div>
  //   );
  // } 
}

export default App;
