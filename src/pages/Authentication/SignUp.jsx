import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import registerPageBgImg from "../../assets/others/authentication.png";
import lottieImg from "../../assets/others/authentication2.png";

const SignUp = () => {
  const handleRegister = (e) => {
    e.preventDefault();
  };
  return (
    <div
      style={{ backgroundImage: `url(${registerPageBgImg})` }}
      className="hero min-h-screen shadow-2xl my-5 rounded"
    >
      <div className="hero-content flex-col-reverse md:flex-row-reverse">
        <div>
          <img className="w-full" src={lottieImg} alt="Login Image" />
        </div>
        <div className="card w-full shrink-0 max-w-md">
          <h2 className="text-black font-bold text-4xl text-center">SignUp</h2>
          <form onSubmit={handleRegister} className="card-body">
            <fieldset className="fieldset text-base space-y-2">
              <label className="fieldset-label">Name</label>
              <input
                type="text"
                name="name"
                className="input w-full outline-none focus:border-0"
                placeholder="User Name"
                required
              />
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
              <label className="fieldset-label">Confirm Password</label>
              <input
                type="password"
                name="con-password"
                className="input w-full outline-none focus:border-0"
                placeholder="Confirm Password"
                required
              />
              <input
                className="btn bg-[#D1A054] text-white text-base mt-4"
                type="submit"
                value={"REGISTER"}
              />
            </fieldset>
          </form>
          <div className="px-6 text-center">
            <p className="text-orange-400 font-semibold text-xl">
              Have an Account? <Link to="/login">Sign IN</Link>
            </p>
            <div className="divider">OR SIGN UP WITH</div>
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

export default SignUp;
