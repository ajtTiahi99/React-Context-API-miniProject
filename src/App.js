import './App.css';
import MoviesList from './MoviesList';
import { MovieProvider } from './MovieContext';


function App() {
  return (
    <MovieProvider>
      <div className="App">
        <MoviesList/>
      </div>
    </MovieProvider>
  );
}

export default App;
