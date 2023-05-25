
import { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="divider">OR</div>
            <div className="text-center">
                <button onClick={handleGoogleSignIn} className="btn btn-info btn-outline">
                    Google
                </button>
                
        </div>
        </div>
    );
};

export default SocialLogin;