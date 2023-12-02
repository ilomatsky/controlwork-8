import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import All from './components/All/All';
import Sidebar from './components/Sidebar/Sidebar';
import Form from './components/Form/Form';
import Navbar from './components/Navbar/Navbar';
import './App.css';

const App = () => (
  <>
    <Router>
      <Navbar/>
      <div className="main">
        <Sidebar/>
        <Routes>
          <Route path="/" element={<All/>}/>
          <Route path="quotes.json" element={<All/>}/>
          <Route path="quotes/star-wars" element={<All/>}/>
          <Route path="quotes/famous-people" element={<All/>}/>
          <Route path="quotes/saying" element={<All/>}/>
          <Route path="quotes/humour" element={<All/>}/>
          <Route path="quotes/motivational" element={<All/>}/>
          <Route path="quotes/form" element={<Form/>}/>
          <Route path="quotes/:id/form" element={<Form/>}/>
        </Routes>
      </div>
    </Router>
  </>
);

export default App;
