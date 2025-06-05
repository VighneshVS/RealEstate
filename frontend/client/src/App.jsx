import './App.css'
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Search from './pages/search.jsx';
import Contact from './pages/contact.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App
