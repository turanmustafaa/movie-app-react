import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import ContextProvider from './context/app-context';

function App() {
  return (
    <Router>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </ContextProvider>
    </Router>
  );
}

export default App;

