import './App.css';
import { Routes ,Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Tecnology from './Components/Tecnology';
import Bussiness from './Components/Bussiness';
import Sports from './Components/Sports';
import Parent from './Components/Parent';
import NotFound from './Components/NotFound';
function App() {
  return (
    <>

<Navbar/>
    <div className='container'>
   
<Routes>
<Route path='news_app/' element={<Home/>}/>
  
  <Route path='news_app/home' element={<Home/>}/>
  <Route path='news_app/bussiness' element={<Bussiness/>}/>
  <Route path='news_app/sports' element={<Sports/>}/>
  <Route path='news_app/tecnology' element={<Tecnology/>}/>
  <Route path='news_app/Parent' element={<Parent/>}/>
  <Route path='*' element={<NotFound/>}/>
    </Routes>
    </div>

   
    
    </>
  );
}

export default App;
