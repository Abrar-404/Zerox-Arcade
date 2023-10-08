import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <footer className="footer p-10 text-neutral-content">
        <aside>
          <div className="flex gap-10 items-center">
            <img
              className="max-w-[200px] max-h-[100px] rounded-full"
              src="https://i.ibb.co/j8LjbSR/e3c5673366eb7e3d305c383d60b9248a.gif"
              alt=""
            />
            <div>
              <p className="text-white max-w-[50%] font-semibold text-xs">
                {' '}
                Explore the latest in gaming and tech on our page, where we dive
                into the digital worlds most exciting developments and
                entertainment.
              </p>
            </div>
          </div>
        </aside>
        <nav>
          <header className="footer-title">Contact Us</header>
          <div className="flex items-center gap-5">
            <div className="grid text-white text-lg grid-flow-col gap-4">
              <FaFacebookSquare></FaFacebookSquare>
            </div>
            <div className="text-white text-lg">
              {' '}
              <FaTwitter></FaTwitter>
            </div>
            <div className="text-white text-lg">
              {' '}
              <FaDiscord></FaDiscord>
            </div>
          </div>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
