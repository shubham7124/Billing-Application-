
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddData from "./Component/AddData";
import Display from "./Component/Display";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Add from './Component/Add';


function App() {
  return (

    <div className="container showing  ">
      <BrowserRouter>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
         
            <ul class="navbar-nav">
                <li class="nav-item">
                   <Link className="nav-link active" to={'/'}>Buyed List</Link>
                </li>
                <li class="nav-item">
                <Link className="nav-link active" to={'/add'}>Add Product</Link>
                </li>
              </ul>
        
           
          </div>
        </nav>
        <Routes>
          <Route path='/' element={<Display></Display>} />
          <Route path='/add' element={<Add></Add>}/>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
