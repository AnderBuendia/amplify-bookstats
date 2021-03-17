import Input from '../generic/Input';

const SignUp = ({onChange, setUiState, signUp}) => {
    return (
        <>
            <p className="text-3xl font-black text-center">Sign up for an account</p>
            <div className="mt-10">
                <label className="text-sm">Username</label>
                <Input onChange={onChange} name="name" />
            </div>
            <div className="mt-4">
                <label className="text-sm">Email</label>
                <Input onChange={onChange} name="email" />
            </div>
            <div className="my-4">
                <label className="text-sm">Password</label> 
                <Input 
                    onChange={onChange} 
                    name="password" 
                    type="password" 
                />
            </div>
            <button 
                onClick={signUp}
                className="text-white w-full mt-6 bg-pink-600 hover:bg-pink-800 p-2 rounded"
            >
                Sign Up
            </button>
            <p className="mt-8 text-sm font-bold">
                Have an account?
                <span
                    onClick={() => setUiState('signIn')}
                    role="button"
                    className="ml-2 cursor-pointer text-pink-600 hover:text-pink-800"
                >
                    Sign In
                </span>
            </p>
        </>
    );
}
 
export default SignUp;