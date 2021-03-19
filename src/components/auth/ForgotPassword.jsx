import Input from '../generic/Input';

const ForgotPassword = ({onChange, setUiState, forgotPassword}) => {
  return (  
    <>
      <p className="text-3xl font-black">Forgot Password</p>
      <div className="mt-10">
          <label className="text-sm">Introduce your Email</label>
          <Input onChange={onChange} name="email" />
      </div>
    
      <button 
          onClick={forgotPassword}
          className="text-white w-full mt-6 bg-pink-600 p-3 rounded"
      >
          Reset Password
      </button>
      <button
          onClick={() => setUiState('signIn')}
          className="text-sm mt-6 text-pink-500"
      >
          Cancel
      </button>
    </>
  );
}
 
export default ForgotPassword;