
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Login from './pages/Login';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import SignUp from './pages/SignUp.js';
import { CartProvider } from './context&useredusers/context.js';
import { MyOrders } from './pages/MyOrders.jsx';
function App() {
  return (
    <CartProvider>
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/createuser' element={<SignUp/>} />
          <Route exact path='/myorders' element={<MyOrders/>} />
        </Routes>
      </div>
    </Router>
    </CartProvider>
   
  );
}

export default App;
