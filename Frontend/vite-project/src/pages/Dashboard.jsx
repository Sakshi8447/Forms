import React from 'react';
import { Label, TextInput } from 'flowbite-react';
import WorkInformation from '../components/WorkInfo';
import PrivateInformation from '../components/PrivateInfo';
import HRSetting from '../components/HRSetting';
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
  const location = useLocation();
  const userId = location.pathname.split("/").pop(); // Extracting the user ID from the URL path

  return (
    <>
      <h1>Dashboard for User: {userId}</h1>
      <PrivateInformation />
      <WorkInformation />
      <HRSetting />
    </>
  );
};

export default Dashboard;
