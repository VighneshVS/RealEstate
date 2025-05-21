import './App.css'
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Rent from './pages/Rent.jsx';
import Sales from './pages/sales.jsx';
import Contact from './pages/contact.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/rent' element={<Rent />} />
        <Route path='/sales' element={<Sales />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App
