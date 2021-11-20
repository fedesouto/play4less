import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <NavBar counter="3"/>
      {/* <ItemListContainer name="Federico" /> */
      }
      <ItemDetailContainer itemId={5}/>
        
    </div>
  );
}

export default App;