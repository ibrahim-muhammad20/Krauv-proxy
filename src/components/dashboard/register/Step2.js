import React from "react";
import { useNavigate } from "react-router-dom";

const Step2 = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded shadow-[0px_1px_5px_2px_rgba(0,0,0,0.2)]">
      <div className="px-4 py-3 dark:bg-[#18181A] dark:text-white space-y-2 md:space-y-6">
        <div className="flex flex-col space-y-1 text-center">
          <h1 className="font-bold h4 dark:text-white">Registration</h1>
          <p>
            Step 2/3: <span>Account Information</span>
          </p>
          <div className="flex flex-col md:flex-row gap-3 mt-2">
            <div className="text-gray-400 flex flex-col space-y-1">
              <label className="text-sm dark:text-white">Name</label>
              <input
                type="text"
                className="outline-none border-[1px] border-gray-300 p-2 rounded md:w-40"
              />
            </div>
            <div className="text-gray-400 flex flex-col space-y-1">
              <label className="text-sm dark:text-white">Surname</label>
              <input
                type="text"
                className="outline-none border-[1px] border-gray-300 p-2 rounded md:w-40"
              />
            </div>
          </div>
        </div>
        <div className="text-gray-400 flex flex-col space-y-1">
          <label className="text-sm dark:text-white">
            Company / name (optional)
          </label>
          <input
            type="text"
            className="outline-none border-[1px] border-gray-300 p-2 rounded"
          />
        </div>
        <div className="text-gray-400 flex flex-col space-y-1">
          <label className="text-sm dark:text-white">Phonenumber</label>
          <input
            type="number"
            className="outline-none border-[1px] border-gray-300 p-2 rounded"
          />
        </div>
        <div className="flex gap-6 flex-col sm:flex-row pt-2">
          <button
            className="btn py-2 px-7 whitespace-nowrap mx-auto dark:text-white w-full border-[1px] rounded-lg border-black dark:border-white  text-center"
            onClick={() => navigate("/dashboard/login")}
          >
            Back
          </button>
          <button
            className="btn bg-main py-2 px-10 rounded-lg w-full"
            onClick={() => navigate("/dashboard/register/step/3")}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step2;
