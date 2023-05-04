import React,{useEffect, useState} from 'react'
import {  useDispatch,useSelector } from 'react-redux';
import { fetchAppData } from '../store/ActionCreator/userAction';
import { Modal } from 'antd';
import AppModal from './modal/AppModal';
const User = ({  }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };






  const dispatch = useDispatch()
  const [selectedApp, setSelectedApp] = useState("");
  const {applications} = useSelector(state => state.application)

console.log('application', applications);
  useEffect(() => {
    if(selectedApp!==""){
      dispatch(fetchAppData(selectedApp))
    }
  }, [selectedApp])
  const showModal1 = (user) => {
    console.log(user)
    setSelectedApp(user);
    setIsModalOpen(true);

  };
  return (
    <div>
      {
        applications?.map(app => (
          <tbody>
            <tr>
              
              <td  onClick={()=> {
      
                showModal1(app)}} selectedApp={selectedApp}>{app}</td>
            </tr>
          </tbody>
        ))
      }
      <AppModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>

    </div>

  );
};



export default User;
