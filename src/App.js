import './App.css';
import Nav from './compenent/nav';
import Movie_info from './compenent/movie_info';
import { BrowserRouter,Route,Router,Routes } from 'react-router-dom';
import Movielist from './compenent/movielist';

function App() {
  return (
    <div className="App">
      {/* <Route path='/' Component={Movie_info}/> */}
      <BrowserRouter>
        <>
          <Nav/>
          <Routes>
          <Route path="/" Component={Movielist}></Route>
          <Route path='/01234' Component={Movie_info}/>
          </Routes>
        </>
      </BrowserRouter>
    </div>
  );
}

export default App;
