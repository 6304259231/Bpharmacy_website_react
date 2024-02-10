
import './App.css';
import Navbar from './Navbar';
import Orders from './Routes/Orders';
import Products from './Routes/Products'
import Signin from './Routes/Signin';
import { BrowserRouter , Route , Routes} from 'react-router-dom'
import Users from './Routes/Users';


function App() {
  return (
    <BrowserRouter>
    
     <Navbar/>
      <Routes>
         <Route path='/' element={<Signin/>}/>
         <Route path='/orders' element={<Orders/>}/>
         <Route path='/products' element={<Products/>}/>
         <Route path='/users' element={<Users/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
