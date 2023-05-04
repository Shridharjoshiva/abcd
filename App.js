import './App.css';
import Contetnt from './components/Contetnt';
// import Layouts from './components/Layouts';
// import { useDispatch, useSelector } from 'react-redux';
// import {  useEffect } from 'react';
// import { userAction } from './store/ActionCreator/userAction';
// import User from './components/User';


function App() {
  // const dispatch = useDispatch()
  // const useList = useSelector(state => state.userList)
  // const { loading, users, error } = useList

  // useEffect(() => {
  //   dispatch(userAction()) 
  // }, [dispatch])
  return (
    <div>
      {/* {loading ? <h2> loading...</h2> : error ? <h2>{error}</h2> :
       <User users={users}/>
      } */}

       
      <Contetnt/>
    </div>
  );
}

export default App;
