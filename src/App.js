import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Collection from './components/collection/Collection';
import Explore from './components/explore/Explore';
function App() {
  return (
    
    <div className="App">
      <div className='h-screen'>
        <Home />
      </div>
      <div className='h-full mt-0 ' id='vrapp'>
        <Collection />
      </div>
      
    </div>

  );
}

export default App;
