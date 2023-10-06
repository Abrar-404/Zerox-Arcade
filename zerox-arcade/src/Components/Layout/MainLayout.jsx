import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import backImg from '../../assets/background.jpg';

const MainLayout = () => {
  const bodyStyle = {
    backgroundImage: `url(${backImg})`,
    backgroundSize: 'cover', // Adjust as needed
    backgroundRepeat: 'no-repeat', // Adjust as needed
    backgroundAttachment: 'fixed', // Adjust as needed
  };

  return (
    <div className="max-w-[425px] md:max-w-[768px] space-y-10 lg:max-w-[1400px] mx-auto">
      <div style={bodyStyle}>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
