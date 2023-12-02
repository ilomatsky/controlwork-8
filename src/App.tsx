import Sidebar from './components/Sidebar/Sidebar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import All from './components/All/All';
import './App.css';

const App = () => (
  <>
    <Router>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<All/>}/>
        <Route path="quotes/star-wars" element={<All/>}/>
        <Route path="quotes/famous-people" element={<All/>}/>
        <Route path="quotes/saying" element={<All/>}/>
        <Route path="quotes/humour" element={<All/>}/>
        <Route path="quotes/motivational" element={<All/>}/>
      </Routes>
    </Router>
  </>
);

export default App;
