import { useContext } from "react";
import { Link, } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Login = () => {

    const { signIn } = useContext(AuthContext)

    const handleLoginBtn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
    
    signIn(email, password)
    .then(result => {
        const user = result.user;
        console.log(user);
        // Navigate(from, { replace: true })
     
    })
    .catch(error => console.log(error));
}
    return (
        <div className="hero min-h-screen mb-20">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold mb-8">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleLoginBtn}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                   
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='my-4 text-center'>New this site ! Please ! <br /> <Link className='text-orange-700 font-bold' to="/registration">Registration</Link> </p>
                        <SocialLogin></SocialLogin>
                       
                    </div>
                </div>
        </div>
      </div> 
    );
};

export default Login;