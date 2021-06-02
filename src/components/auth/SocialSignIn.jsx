import Auth, { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import IconGoogle from 'components/icons/icongoogle';

const SocialSignIn = () => {
  const handleSocialSignIn = () => {
    Auth.federatedSignIn({
      provider: CognitoHostedUIIdentityProvider.Google,
    });
  };

  return (
    <div className="flex flex-col">
      <button
        type="button"
        className="focus:outline-none"
        onClick={() => handleSocialSignIn()}
      >
        <div
          className="flex border border-gray-300 p-2 
              rounded items-center justify-center hover:text-white hover:bg-gray-500 hover:border-gray-600"
        >
          <IconGoogle className="w-4 h-4" />
          <p className="ml-3">Sign in with Google</p>
        </div>
      </button>
    </div>
  );
};

export default SocialSignIn;
