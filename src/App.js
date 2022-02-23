
import './App.css';
import AddEmployee from './components/AddEmployee';
import UpdateEmployee from './components/UpdateEmployee';
import  EmployeeList  from './components/EmployeeList';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import NavBar from './components/NavBar';

const App=()=> {
  return ( 
    <> 
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route index element={<EmployeeList/>}/>
      <Route path="/" element={<EmployeeList/>}></Route> 
      <Route path="/employeeList" element={<EmployeeList/>}/>
      <Route path="/addEmployee" element={<AddEmployee/>}/>
      <Route path="/editEmployee/:id" element={<UpdateEmployee/>}/>
    </Routes>

    </BrowserRouter>
  
  
  </>
  );
}

export default App;
