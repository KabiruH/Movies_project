import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/navbar';
import Homepage from '../components/homepage';
import Login from '../components/login'
import AddMovie from '../components/addMovie'
import Update from '../components/update'
import Register from '../components/register'
import MoviesList from '../components/moviesList'



function App() {
  return (
    <BrowserRouter className="App">
      <Navbar/>

      <Routes>
                <Route path="/" element={<Homepage/>}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route exact path="/addMovie" element={<AddMovie />}></Route>
                <Route path="/update" element={<Update />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/moviesList" element={<MoviesList />}></Route>
            </Routes>


        </BrowserRouter>
  );
}

export default App;
