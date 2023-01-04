import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route , Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import SignIn from './Components/NavigationBar/authForms/SignIn';
import SignUp from './Components/NavigationBar/authForms/SignUp';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Profile from './Components/User/Profile';
import { getcurrentuser } from './JS/actions/authActions';


function App() {
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(getcurrentuser())
   
  }, [])
  
  return (
    <div className="App">
      <NavigationBar/>
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/signin' element={<SignIn/>}  />
        <Route path='/signup' element={<SignUp/>}  />
        <Route path='/profile' element={
          <PrivateRoute>
            <Profile/>
          </PrivateRoute>

        }/>
      </Routes>
    </div>
  );
}

export default App;
