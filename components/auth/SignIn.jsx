// import SocialSignIn from "./SocialSignIn"
import Input from "../generic/Input";

const SignIn = ({onChange, setUiState, signIn}) => {
    return (  
        <div>
            <p className="text-3xl font-black">Sign in to your account</p>
            <div className="mt-10">
                <label className="text-sm">Email</label>
                <Input onChange={onChange} name="email" />
            </div>
            <div className="mt-4">
                <label>Password</label>
                <span
                    onClick={() => setUiState('forgotPassword')}
                    className="text-sm ml-8 sm:ml-44 text-pink-600 cursor-pointer"
                >
                    Forgot your Password?
                </span>
                <Input 
                    onChange={onChange} 
                    name="password" 
                    type="password" 
                />
            </div>
          
            <button 
                onClick={signIn}
                className="text-white w-full mt-6 bg-pink-600 p-3 rounded"
            >
                Sign in
            </button>
           
            <div className="my-5 border border-gray-300"></div>

            {/* <SocialSignIn /> */}
            
            <p className="mt-8 text-sm font-light">
                Don't have an account?
                <span
                    onClick={() => setUiState('signUp')}
                    role="button"
                    className="ml-3 cursor-pointer text-pink-600"
                >
                    Sign Up
                </span>
            </p>
        </div>
    );
}
 
export default SignIn;