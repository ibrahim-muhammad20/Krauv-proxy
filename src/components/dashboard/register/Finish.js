import React from "react";
import { GoMail } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const Finish = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded shadow-[0px_1px_5px_2px_rgba(0,0,0,0.2)]">
      <div className="px-4 py-3 dark:bg-[#18181A] dark:text-white">
        <div className="flex flex-col space-y-8 items-center text-center my-10 max-w-xs">
          <div className="bg-[#C1FFE7] p-3 rounded-[500px] w-fit">
            <GoMail color="#54FFBD" size={50} />
          </div>
          <p className="dark:text-gray-300">Success!</p>
          <h1 className="font-bold h4 dark:text-white">Check Your Email</h1>
          <p className="text-sm">
            you have Successfully created an account. we have sent you an e-mail
          </p>
          <button
            className="btn bg-main py-2 px-10 rounded-lg w-full"
            onClick={() => navigate("/dashboard/login")}
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Finish;
