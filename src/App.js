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
<Route path='/' element={<Home/>}/>
  
  <Route path='home' element={<Home/>}/>
  <Route path='bussiness' element={<Bussiness/>}/>
  <Route path='sports' element={<Sports/>}/>
  <Route path='tecnology' element={<Tecnology/>}/>
  <Route path='Parent' element={<Parent/>}/>
  <Route path='*' element={<NotFound/>}/>
    </Routes>
    </div>

   
    
    </>
  );
}

export default App;
