import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import registerPageBgImg from "../../assets/others/authentication.png";
import lottieImg from "../../assets/others/authentication2.png";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import useUserAxios from "../../hooks/useUserAxios";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const userAxios = useUserAxios();

  // watch password for confirming the password match
  const password = watch("password");

  const onSubmit = (data) => {
    const { name, photo, email, password } = data;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);

        // update user profile when user signup---> name, photoURL,
        updateUserProfile(name, photo)
          .then(() => {
            // save user signup data to databse --> email & name
            userAxios
              .post("/user", { name, email })
              .then((data) => {
                console.log(data.data);
                toast.success("User Successfully Create");
                navigate("/");
              })
              .catch((error) => {
                toast.error(error.message);
              });
          })
          .catch((error) => toast.error(error.message));
      })
      .catch((error) => {
        toast.error(error.message);
      });
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
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <fieldset className="fieldset text-base space-y-2">
              <label className="fieldset-label">Name</label>
              <input
                type="text"
                name="name"
                {...register("name", { required: true })}
                className="input w-full outline-none focus:border-0"
                placeholder="User Name"
                // required
              />
              {errors.name && (
                <span className="text-red-600">Name field is required</span>
              )}
              <label className="fieldset-label">Photo URL</label>
              <input
                type="text"
                {...register("photo", { required: true })}
                className="input w-full outline-none focus:border-0"
                placeholder="Photo URL"
                // required
              />
              {errors.photo && (
                <span className="text-red-600">Photo field is required</span>
              )}
              <label className="fieldset-label">Email</label>
              <input
                type="email"
                name="email"
                {...register("email", { required: true })}
                className="input w-full outline-none focus:border-0"
                placeholder="Email"
                // required
              />
              <label className="fieldset-label">Password</label>
              <input
                type="password"
                name="password"
                {...register("password", {
                  required: true,
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  },
                })}
                className="input w-full outline-none focus:border-0"
                placeholder="Password"
                // required
              />
              {errors.password && (
                <span className="text-red-600">
                  Password must be at least one uppercse, one lowercse, one
                  number and one special character
                </span>
              )}
              <label className="fieldset-label">Confirm Password</label>
              <input
                type="password"
                name="con-password"
                {...register("conPassword", {
                  required: "Confirm password is required",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
                className="input w-full outline-none focus:border-0"
                placeholder="Confirm Password"
                // required
              />
              <p className="text-red-600">{errors.conPassword?.message}</p>
              <input
                className="btn bg-[#D1A054] text-white text-base mt-4"
                type="submit"
                value={"REGISTER"}
              />
            </fieldset>
          </form>
          <p className="text-orange-400 font-semibold text-xl text-center">
            Already Have an Account? <Link to="/login"><b>Sign In</b></Link>
          </p>
          {/* register with social links */}
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
