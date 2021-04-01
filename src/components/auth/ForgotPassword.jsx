import AuthInput from '../generic/AuthInput';

const ForgotPassword = ({ onChange, setUiState, forgotPassword }) => {
  return (
    <>
      <p className="text-3xl font-black">Forgot Password</p>
      <AuthInput onChange={onChange} name="email" />

      <button
        onClick={forgotPassword}
        className="text-white w-full mt-6 bg-pink-600 p-3 rounded"
      >
        Reset Password
      </button>
      <button
        onClick={() => setUiState(null)}
        className="text-sm mt-6 text-pink-500"
      >
        Cancel
      </button>
    </>
  );
};

export default ForgotPassword;
