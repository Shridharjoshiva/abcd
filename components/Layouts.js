import React from 'react'
import { Routes, Route, } from 'react-router-dom';
import User from './User';
import { useDispatch, useSelector } from 'react-redux';
import {  useEffect } from 'react';
import { userAction } from '../store/ActionCreator/userAction';
// import {User1} from './User1'
import User1 from './User1'



function Layouts() {
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(userAction()) 
  }, [dispatch])
  return (
    <div>
      <Routes>
        <Route path="/CostAnlysis" element={<div>CostAnlysis</div>}></Route>
        <Route path="/Resources" element={<User1/>}></Route>
        <Route path="/Application" element={<User />}></Route>
      </Routes>
      
      
    </div>
  )
}

export default Layouts;

