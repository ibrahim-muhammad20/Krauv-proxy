import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="">
      <div className="bg-white rounded shadow-[0px_1px_5px_2px_rgba(0,0,0,0.2)]">
        <div className="px-4 py-3 dark:bg-[#18181A] space-y-5">
          <div className="text-center">
            <h1 className="font-bold h4 dark:text-white">
              Log in to Your Account
            </h1>
          </div>
          <div className="flex items-center gap-3 border-[1px] border-gray-300 p-2 rounded-sm">
            <FcGoogle size={25} />
            <button className="flex-1 dark:text-white">
              Continue With Google
            </button>
          </div>
          <div className="d-flex align-items-center my-4">
            <div className="w-[180px] border-t border-solid border-gray-300" />
            <div className="mx-2 fw-bold text-sm text-gray-500">OR</div>
            <div className="w-[180px] border-t border-solid border-gray-300" />
          </div>
          <div className="text-gray-400 flex flex-col space-y-1">
            <label className="text-sm dark:text-white">
              Email Address or Username
            </label>
            <input
              type="text"
              className="outline-none border-[1px] border-gray-300 p-2 rounded"
            />
          </div>
          <div className="text-gray-400 flex flex-col space-y-1">
            <label className="text-sm dark:text-white">Password</label>
            <input
              type="password"
              className="outline-none border-[1px] border-gray-300 p-2 rounded"
            />
          </div>
          <div
            className="hover:underline hover:underline-offset-1 text-gray-400 hover:text-red-400 text-sm flex justify-end cursor-pointer"
            onClick={() => navigate("/dashboard/recovery")}
          >
            <p>Forgot Password?</p>
          </div>
          <div>
            <button
              className="btn bg-main py-2 px-10 dark:hover:text-white rounded-lg w-full"
              onClick={() => navigate("/dashboard")}
            >
              Log in
            </button>
          </div>
        </div>
      </div>
      <div className="text-center space-y-2 mt-2">
        <p className="dark:text-white">Didn't have an account yet?</p>
        <p
          onClick={() => navigate("/dashboard/register/step/2")}
          className="hover:underline hover:underline-offset-1 text-red-500 cursor-pointer"
        >
          Login with new account
        </p>
      </div>
    </div>
  );
};

export default Login;
