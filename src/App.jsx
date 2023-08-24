
import Header from './components/header'
import Home from './components/home'

import Career from './components/Career'


import Footer from './components/footer';
import './styles/App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';






function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        
        <Route path='/career' element={<Career />}/>
        
       
       
        

      </Routes>
      <Footer />
    </Router>
 
   
  );
}

export default App;
