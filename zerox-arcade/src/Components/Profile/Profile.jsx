import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Profile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <div>
      <img
        className="mx-auto text-center w-[200px] h-[200px] mt-20 rounded-full"
        src={user?.photoURL}
        alt=""
      />

      <p className="text-center text-3xl text-white mt-10 font-bold">
        {user?.displayName}
      </p>

      <div className="mx-auto text-center mt-10">
        <h1 className="text-2xl font-bold text-white mx-auto">
          Progress on Events
        </h1>
        <div className="mt-10">
          <h1 className="mb-5 font-bold text-white">
            Gaming Expo, Tech Events, Hackathons
          </h1>
          <div
            className="radial-progress text-secondary"
            style={{ '--value': 0 }}
          >
            0%
          </div>
          <div
            className="radial-progress text-secondary"
            style={{ '--value': 20 }}
          >
            20%
          </div>
          <div
            className="radial-progress text-secondary"
            style={{ '--value': 60 }}
          >
            60%
          </div>
          <div
            className="radial-progress text-secondary"
            style={{ '--value': 80 }}
          >
            80%
          </div>
          <div
            className="radial-progress text-secondary"
            style={{ '--value': 100 }}
          >
            100%
          </div>
        </div>
      </div>

      <div className="mx-auto text-center mt-10">
        <div className="stats bg-white bg-opacity-70 shadow">
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Total Likes</div>
            <div className="stat-value text-primary">25.6K</div>
            <div className="stat-desc">21% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Page Views</div>
            <div className="stat-value text-secondary">2.6M</div>
            <div className="stat-desc">21% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <div className="avatar online">
                <div className="w-16 rounded-full">
                  <img src="https://i.ibb.co/85zxjZR/Xin-Final-Paid-Revised.webp" />
                </div>
              </div>
            </div>
            <div className="stat-value">86%</div>
            <div className="stat-title">Tasks done</div>
            <div className="stat-desc text-secondary">31 tasks remaining</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
