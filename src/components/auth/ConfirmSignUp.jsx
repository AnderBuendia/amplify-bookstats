import AuthInput from '../generic/AuthInput';

const ConfirmSignUp = ({ onChange, setUiState, confirmSignUp }) => {
  return (
    <div>
      <p className="text-3xl font-black">Confirm your account</p>

      <AuthInput
        onChange={onChange}
        name="authCode"
        labelName="Confirmation Code"
      />

      <button
        onClick={confirmSignUp}
        className="text-white w-full mt-6 bg-pink-600 p-3 rounded"
      >
        Confirm Sign Up
      </button>
      <button
        onClick={() => setUiState(null)}
        className="text-sm mt-6 text-pink-500"
      >
        Cancel
      </button>
    </div>
  );
};

export default ConfirmSignUp;
