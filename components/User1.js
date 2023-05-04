import React,{useEffect, useState} from 'react'
import {  useDispatch,useSelector } from 'react-redux';
// import { resourcesAction } from '../store/ActionCreator/resourceAction';
import { resourcesAction } from '../store/ActionCreator/resourceAction';
import { Modal } from 'antd';
import AppModal from './modal/AppModal';
const User1 = ({  }) => {

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
  const {resources} = useSelector(state => state.application)

console.log('application',resources);
  useEffect(() => {
    if(selectedApp!==""){
      dispatch(resourcesAction(selectedApp))
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
        resources?.map(app => (
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



export default User1;
