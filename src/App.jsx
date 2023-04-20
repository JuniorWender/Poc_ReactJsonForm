import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Components/pages/Home';
import Custom_Navbar from './Components/layout/Custom_NavBar';
import Custom_Form from './Components/pages/Custom_Form';

function App() {
  return (
    <Router>
      <Custom_Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route  path="/form" element={<Custom_Form/>} />
      </Routes>
    </Router>
  );
}

export default App;