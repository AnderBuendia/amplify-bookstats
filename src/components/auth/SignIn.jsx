import SocialSignIn from "./SocialSignIn"
import Input from "../generic/Input";

const SignIn = ({onChange, setUiState, signIn}) => {
return (  
  <>
    <p className="text-3xl font-black text-center">Sign in to your account</p>
    <div className="mt-10">
        <label htmlFor="email" className="text-sm">Email</label>
        <Input onChange={onChange} id="email" name="email" />
    </div>
    <div className="mt-4 mb-2">
        <label htmlFor="password" className="text-sm">Password</label>
        <Input 
            onChange={onChange} 
            name="password" 
            id="password"
            type="password" 
        />
    </div>
    <div>
        <span
            onClick={() => setUiState('forgotPassword')}
            className="mt-4 underline text-sm text-pink-600 hover:text-pink-800 cursor-pointer"
        >
            Forgot your Password?
        </span>
    </div>

    <button 
        onClick={signIn}
        className="text-white w-full mt-6 bg-pink-600 hover:bg-pink-800 p-2 rounded"
    >
        Sign in
    </button>

    <div className="my-5 border border-gray-300"></div>

    <SocialSignIn />

    <p className="mt-8 text-sm font-bold">
        Don't have an account?
        <span
            onClick={() => setUiState('signUp')}
            role="button"
            className="ml-2 cursor-pointer text-pink-600 hover:text-pink-800"
        >
            Sign Up
        </span>
    </p>
  </>
);
}
 
export default SignIn;