import { Route , Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import SignIn from './Components/NavigationBar/authForms/SignIn';
import SignUp from './Components/NavigationBar/authForms/SignUp';
import NavigationBar from './Components/NavigationBar/NavigationBar';


function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/signin' element={<SignIn/>}  />
        <Route path='/signup' element={<SignUp/>}  />
      </Routes>
    </div>
  );
}

export default App;
