import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import backImg from '../../assets/banner_image.png';

const MainLayout = () => {
  const background = {
    backgroundImage: `url(${backImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
  };

  return (
    <div style={background}>
      <div className="max-w-[425px] md:max-w-[768px] space-y-10 lg:max-w-[1400px] mx-auto">
        <div>
          <Navbar></Navbar>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
