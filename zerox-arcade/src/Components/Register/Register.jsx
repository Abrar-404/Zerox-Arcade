import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Register = () => {
  const { registerUser } = useContext(AuthContext);

  const handleRegister = e => {
    e.preventDefault();

    const email = e.target.email.value;
    // const confirm_email = e.target.confirm_email.value;
    const password = e.target.password.value;
    // const confirm_password = e.target.confirm_password.value;
    const name = e.target.name.value;

    console.log(email, name, password);

    registerUser(email, password)
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                  name="name"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered"
                  required
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Confirm Your Email"
                  className="input input-bordered"
                  required
                  name="confirm_email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Confirm Your Password"
                  className="input input-bordered"
                  required
                  name="confirm_password"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                  name="password"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <p>
                Already Have An Account? Please{' '}
                <Link className="font-bold text-blue-700" to="/login">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
