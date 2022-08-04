import { selectValue } from "../../redux/features/dashboard/dashboardReducer";
import DashboardLayout from "./DashboardLayout";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MyAccountLayout = ({ theme, setTheme, children }) => {
  const value = useSelector(selectValue);
  const navigate = useNavigate();

  return (
    <DashboardLayout theme={theme} setTheme={setTheme} title="My Account">
      <div
        className={`${
          theme ? "dark:bg-[#18181A]" : "bg-white"
        } flex px-5 pt-4 pb-2 space-x-10`}
      >
        <p
          onClick={() => navigate("/dashboard/product")}
          className={`${
            value.my1 && "underline underline-offset-8 font-bold"
          } cursor-pointer`}
        >
          Product
        </p>
        <p
          onClick={() => navigate("/dashboard/profile")}
          className={`${
            value.my2 && "underline underline-offset-8 font-bold"
          } cursor-pointer`}
        >
          Profile
        </p>
        <p
          onClick={() => navigate("/dashboard/invoice")}
          className={`${
            value.my3 && "underline underline-offset-8 font-bold"
          } cursor-pointer`}
        >
          Invoice
        </p>
        <p
          onClick={() => navigate("/dashboard/setting")}
          className={`${
            value.my4 && "underline underline-offset-8 font-bold"
          } cursor-pointer`}
        >
          Setting
        </p>
      </div>
      <div className="min-h-[calc(100vh-215.66px)]">{children}</div>
    </DashboardLayout>
  );
};

export default MyAccountLayout;
