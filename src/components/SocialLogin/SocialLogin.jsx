import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const SocialLogin = () => {
  const { googleLogin } = useAuth();
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => toast.error(error.message));
  };
  return (
    <div className="px-6 text-center">
      <div className="divider">OR SIGN UP WITH</div>
      <div className="flex gap-4 justify-center">
        <button className="cursor-pointer">
          <FaFacebook size={24} />
        </button>
        <button onClick={handleGoogleLogin} className="cursor-pointer">
          <FaGoogle size={24} />
        </button>
        <button className="cursor-pointer">
          <FaTwitter size={24} />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
