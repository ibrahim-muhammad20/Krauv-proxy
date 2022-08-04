import React, { useEffect } from "react";
import MyAccountLayout from "../../../components/layouts/MyAccountLayout";
import Profileo from "../../../components/dashboard/myaccount/profile/Profile";
import { setValue } from "../../../redux/features/dashboard/dashboardReducer";
import { useDispatch } from "react-redux";

const Profile = ({ theme, setTheme }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setValue({ name: "my2", bool: true, main: "my", mbool: true }));
  }, [dispatch]);

  return (
    <MyAccountLayout setTheme={setTheme} theme={theme}>
      <Profileo theme={theme} />
    </MyAccountLayout>
  );
};

export default Profile;
