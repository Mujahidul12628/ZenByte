import React, { useContext } from 'react';
// import img from '../../../src/images/shoping image.jpg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';


const Login = () => {
    const {logInUser}=useContext(AuthContext)

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        logInUser(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
    }

    return (
        <div className="min-h-screen hero bg-slate-50">
            <div className="flex hero-content">
                <div className="text-center md:w-1/2 lg:text-left">
                    {/* <img src={img} className="w-full mx-auto md:w-2/3 lg:w-1/2" alt="Shopping" /> */}
                </div>
                <div className="flex-shrink-0 w-full max-w-sm bg-white shadow-2xl card md:w-1/2">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-3xl font-bold text-center text-black">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="font-semibold text-black label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="font-semibold text-black label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="text-black label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="mt-6 form-control">
                            <button className="btn btn-primary" type="submit">Login</button>
                        </div>
                        <p className='mt-2 font-serif text-center text-black'>New Here <Link to='/register' className='text-red-500 underline'>Register!</Link> Now</p>
                    </form>              
                </div>
            </div>
        </div>
    );
};

export default Login;
