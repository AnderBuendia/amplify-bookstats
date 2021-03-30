import AuthInput from '../generic/AuthInput';

const ForgotPasswordSubmit = ({ onChange, forgotPasswordSubmit }) => {
  return (
    <>
      <p className="text-3xl font-black">Confirm new Password</p>

      <AuthInput
        onChange={onChange}
        name="authCode"
        labelName="Confirmation Code"
      />

      <AuthInput
        type="password"
        onChange={onChange}
        name="password"
        labelName="New Password"
      />

      <button
        onClick={forgotPasswordSubmit}
        className="text-white w-full mt-6 bg-pink-600 p-3 rounded"
      >
        Submit New Password
      </button>
    </>
  );
};

export default ForgotPasswordSubmit;
