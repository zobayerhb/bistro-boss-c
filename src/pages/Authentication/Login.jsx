import { useContext, useEffect, useState } from "react";
import loginPageBgImg from "../../assets/others/authentication.png";
import lottieImg from "../../assets/others/authentication2.png";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useDynamicTitle } from "../../hooks/useDynamicTitle";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  useDynamicTitle("Bistro Boss | Login Page");
  const navigate = useNavigate();
  const location = useLocation();
  const { singInUser } = useContext(AuthContext);
  const [captchaValue, setCaptchaValue] = useState("");
  const [isCaptchaValid, setIsCaptchaValid] = useState(true);

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  //   CAPTCHA VALIDATION
  useEffect(() => {
    if (validateCaptcha(captchaValue)) {
      setIsCaptchaValid(false);
    } else {
      setIsCaptchaValid(true);
    }
  }, [captchaValue]);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.table({ email, password });

    singInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("User Successfully Login");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
      });
  };
  return (
    <div
      style={{ backgroundImage: `url(${loginPageBgImg})` }}
      className="hero min-h-screen shadow-2xl my-5 rounded"
    >
      <div className="hero-content flex-col-reverse md:flex-row">
        <div>
          <img className="w-full" src={lottieImg} alt="Login Image" />
        </div>
        <div className="card w-full shrink-0 max-w-md">
          <h2 className="text-black font-bold text-4xl text-center">Login</h2>
          <form onSubmit={handleLogin} className="card-body">
            <fieldset className="fieldset text-base space-y-2">
              <label className="fieldset-label">Email</label>
              <input
                type="email"
                name="email"
                className="input w-full outline-none focus:border-0"
                placeholder="Email"
                required
              />
              <label className="fieldset-label">Password</label>
              <input
                type="password"
                name="password"
                className="input w-full outline-none focus:border-0"
                placeholder="Password"
                required
              />

              {/* CAPTCHA ADD INPUT*/}
              <label className="fieldset-label">
                <LoadCanvasTemplate />
              </label>
              <input
                onBlur={(e) => setCaptchaValue(e.target.value)}
                defaultValue={captchaValue}
                type="text"
                name="captcha"
                className="input w-full outline-none focus:border-0"
                placeholder="Write Your Catcha"
                required
              />

              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <input
                disabled={isCaptchaValid}
                className="btn bg-[#D1A054] text-white text-base mt-4"
                type="submit"
                value={"Login"}
              />
            </fieldset>
          </form>
          <div className="px-6 text-center">
            <p className="text-orange-400 font-semibold text-xl">
              New Here? <Link to="/signup">Create a New Account</Link>
            </p>
            <div className="divider">OR SIGN IN</div>
            <div className="flex gap-4 justify-center">
              <button className="cursor-pointer">
                <FaFacebook size={24} />
              </button>
              <button className="cursor-pointer">
                <FaGoogle size={24} />
              </button>
              <button className="cursor-pointer">
                <FaTwitter size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
