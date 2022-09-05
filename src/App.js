import './App.css';
import ItemCount from './assets/itemCount';

function App() {
  return (
    <div>
      
      <ItemCount stock={5} initial={1} onAdd={0} />
     </div>
  );
}

export default App;
