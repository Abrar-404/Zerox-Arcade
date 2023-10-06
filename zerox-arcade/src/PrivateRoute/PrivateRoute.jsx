import { AuthContext } from '../Providers/AuthProvider';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { loading, user } = useContext(AuthContext);

  if (loading) {
    return (
      <span className="loading mx-auto loading-infinity loading-lg"></span>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
