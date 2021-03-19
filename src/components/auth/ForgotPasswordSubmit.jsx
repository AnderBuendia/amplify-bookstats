import Input from "../generic/Input";

const ForgotPasswordSubmit = ({onChange, forgotPasswordSubmit}) => {
  return (  
    <>
      <p className="text-3xl font-black">Confirm new Password</p>
      <div className="mt-10">
          <label htmlFor="authCode" className="text-sm">Confirmation Code</label>
          <Input onChange={onChange} name="authCode" />
      </div>

      <div className="mt-10">
          <label htmlFor="password" className="text-sm">New Password</label>
          <Input type="password" onChange={onChange} name="password" />
      </div>
    
      <button 
          onClick={forgotPasswordSubmit}
          className="text-white w-full mt-6 bg-pink-600 p-3 rounded"
      >
          Submit New Password
      </button>
  </>
  );
}
 
export default ForgotPasswordSubmit;