import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Components/pages/Home';
import CustomNavbar from './Components/layout/CustomNavBar';
import FillForm from './Components/pages/FillForm';
import ViewForm from './Components/pages/ViewForm';
import CreateForm from './Components/pages/CreateForm';

function App() {
  return (
    <Router>
      <CustomNavbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route  path="/fillForm" element={<FillForm/>} />
        <Route  path="/viewForm" element={<ViewForm/>} />
        <Route  path="/createForm" element={<CreateForm/>} />
      </Routes>
    </Router>
  );
}

export default App;