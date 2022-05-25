import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Card firstName="Eric" lastName="Sorum"/>
      <Card firstName="Kristina" lastName="Rodel Sorum"/>
      <Card firstName="Huey" lastName="Duck" />
      <Card firstName="Luie" lastName="Duck" />
      <Card firstName="Dooey" lastName="Duck"/>
    </div>
  );
}

export default App;
