
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/navbar';

function App() {
  return (
    <BrowserRouter className="App">
      <Navbar/>
    </BrowserRouter>
  );
}

export default App;
