import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResidentialProxies from "./pages/dashboard/inactive/ ResidentialProxies";
import DedicatedDatacenterProxies from "./pages/dashboard/inactive/DedicatedDatacenterProxies";
import EcommerceApi from "./pages/dashboard/inactive/EcommerceApi";
import Dashboard from "./pages/dashboard/Index";
import SerpScraperApi from "./pages/dashboard/inactive/SerpScraperApi";
import SharedDatacenterProxies from "./pages/dashboard/inactive/SharedDatacenterProxies";
import WebScraperApi from "./pages/dashboard/inactive/WebScraperApi";
import Home from "./pages/Home";
import Login from "./pages/dashboard/Login";
import Finish from "./pages/dashboard/register/Finish";
import Register1 from "./pages/dashboard/register/Step2";
import Register2 from "./pages/dashboard/register/Step3";
import Product from "./pages/dashboard/account/Product";
import Profile from "./pages/dashboard/account/Profile";
import Invoice from "./pages/dashboard/account/Invoice";
import Setting from "./pages/dashboard/account/Setting";
import Recovery from "./pages/dashboard/recovery/Recovery";
import Check from "./pages/dashboard/recovery/Check";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap";

const App = () => {
  const [darkTheme, setTheme] = useState(true);

  useEffect(() => {
    if (darkTheme === true) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkTheme]);

  return (
    <BrowserRouter>
      <div className="bg-[#fff] dark:bg-black">
        <Routes>
          <Route path="/">
            <Route
              index
              element={<Home setTheme={setTheme} theme={darkTheme} />}
            />
            <Route path="dashboard">
              <Route
                index
                element={<Dashboard setTheme={setTheme} theme={darkTheme} />}
              />
              <Route
                path="login"
                element={<Login setTheme={setTheme} theme={darkTheme} />}
              />
              <Route
                path="register/step/2"
                element={<Register1 setTheme={setTheme} theme={darkTheme} />}
              />
              <Route
                path="register/step/3"
                element={<Register2 setTheme={setTheme} theme={darkTheme} />}
              />
              <Route
                path="register/finish"
                element={<Finish setTheme={setTheme} theme={darkTheme} />}
              />
                 <Route
                path="recovery"
                element={<Recovery setTheme={setTheme} theme={darkTheme} />}
              />
                 <Route
                path="recovery/check"
                element={<Check setTheme={setTheme} theme={darkTheme} />}
              />
              <Route
                path="residential-proxies"
                element={
                  <ResidentialProxies setTheme={setTheme} theme={darkTheme} />
                }
              />
              <Route
                path="shared-datacenter-proxies"
                element={
                  <SharedDatacenterProxies
                    setTheme={setTheme}
                    theme={darkTheme}
                  />
                }
              />
              <Route
                path="dedicated-datacenter-proxies"
                element={
                  <DedicatedDatacenterProxies
                    setTheme={setTheme}
                    theme={darkTheme}
                  />
                }
              />{" "}
              <Route
                path="serp-scraper-api"
                element={
                  <SerpScraperApi setTheme={setTheme} theme={darkTheme} />
                }
              />{" "}
              <Route
                path="web-scraper-api"
                element={
                  <WebScraperApi setTheme={setTheme} theme={darkTheme} />
                }
              />
              <Route
                path="ecommerce-api"
                element={<EcommerceApi setTheme={setTheme} theme={darkTheme} />}
              />
              <Route
                path="product"
                element={<Product setTheme={setTheme} theme={darkTheme} />}
              />
              <Route
                path="profile"
                element={<Profile setTheme={setTheme} theme={darkTheme} />}
              />
              <Route
                path="invoice"
                element={<Invoice setTheme={setTheme} theme={darkTheme} />}
              />
              <Route
                path="setting"
                element={<Setting setTheme={setTheme} theme={darkTheme} />}
              />
            </Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
