import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './component/Navigation';
import Home from './pages/Home';
import Create from './pages/Create';
import Update from './pages/Update';


function App() {

  return (
    
    <BrowserRouter>
      <Navigation />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/update-movies/:id" element={<Update />} />
        </Routes>
    </BrowserRouter>

  );
}

export default App;
