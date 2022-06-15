
import { Route, Routes } from 'react-router-dom';
import Both from './Pages/Both';

import Login from './Pages/Login';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/both' element={<Both />}></Route>
      </Routes>





    </div>
  );
}

export default App;
