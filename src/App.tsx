import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import ContextProvider from './context/app-context';

function App() {
  return (
    <Router>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ContextProvider>
    </Router>
  );
}

export default App;

