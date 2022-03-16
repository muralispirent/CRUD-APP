import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsersAction } from './actions';
import { Users } from './Components/Users';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllUsersAction())
  }, [])


  return (
    <div className="App">
      <Users/>
    </div>
  );
}

export default App;
