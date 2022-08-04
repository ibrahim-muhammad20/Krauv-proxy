import React from "react";
import Navbar from "../components/navbar/Navbar";
import Card from "../components/cards/Card";
import CardItem from "../components/cards/CardItem";
import illustrate1 from "../assets/illustration/1.png";
import illustrate2 from "../assets/illustration/2.png";
import illustrate3 from "../assets/illustration/3.png";
import illustrate4 from "../assets/illustration/4.png";
import icon1 from "../assets/icons/1.png";
import icon2 from "../assets/icons/2.png";
import icon3 from "../assets/icons/3.png";
import icon4 from "../assets/icons/4.png";
import icon5 from "../assets/icons/5.png";
import icon6 from "../assets/icons/6.png";
import icon7 from "../assets/icons/7.png";
import icon8 from "../assets/icons/8.png";
import flag1 from "../assets/flag/1.png";
import flag2 from "../assets/flag/2.png";
import flag3 from "../assets/flag/3.png";
import flag4 from "../assets/flag/4.png";
import flag5 from "../assets/flag/5.png";
import flag6 from "../assets/flag/6.png";
import flag7 from "../assets/flag/7.png";
import flag8 from "../assets/flag/8.png";
import flag9 from "../assets/flag/9.png";
import flag10 from "../assets/flag/10.png";
import flag11 from "../assets/flag/11.png";
import flag12 from "../assets/flag/12.png";
import service1 from "../assets/services/1.svg";
import service2 from "../assets/services/2.svg";
import service3 from "../assets/services/3.svg";
import service4 from "../assets/services/4.svg";
import service5 from "../assets/services/5.svg";
import service6 from "../assets/services/6.svg";
import service7 from "../assets/services/7.svg";
import service8 from "../assets/services/8.svg";
import Footer from "../components/footer/Footer";

const Home = ({ setTheme, theme }) => {
  
  return (
    <div className="">
      <Navbar setTheme={setTheme} theme={theme} />
      {/* -------------------------------------------------------------------- */}
      <div className="container flex flex-col-reverse md:grid md:grid-cols-2 items-center my-5 ">
        <div className="space-y-4 flex flex-col my-5 ">
          <h1 className="font-extrabold text-5xl dark:text-white">
            Top-Tier Data Web Collection Infrastructure
          </h1>
          <p className="mb-10 dark:text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique
            vulputate mi proin amet, porta massa enim gravida. Cras et,
            elementum senectus cras placerat posuere. Et, pellentesque semper at
            elit, morbi a ultrices viverra. Risus lacinia magna laoreet feugiat
            quisque commodo pulvinar posuere porttitor. Habitasse interdum in
            pellentesque in ut sollicitudin.
          </p>
          <div className="flex gap-6 flex-col sm:flex-row pt-10">
            <button className="btn bg-main py-3 px-10 rounded-lg w-full sm:w-fit">
              Sign Up
            </button>
            <button className="btn border-[1px] border-black dark:border-main dark:text-main  py-3 px-7 rounded-lg whitespace-nowrap w-full sm:w-fit">
              Talk to sales
            </button>
          </div>
        </div>
        <div>
          <img src={illustrate1} alt="Illustration 1" />
        </div>
      </div>
      {/* -------------------------------------------------------------------- */}
      <div className="dark:bg-[#18181A] bg-[#F2FFFF] mb-32">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-5 gap-8">
          <div className="space-y-4 text-center flex flex-col items-center">
            <img src={icon1} alt="icon" className="h-10 w-10" />
            <div>
              <p className="dark:text-white font-semibold text-xl">
                102+ IPs worldwide{" "}
              </p>
              <p className="dark:text-light text-sm">Around the Globe</p>
            </div>
          </div>
          <div className="space-y-4 text-center flex flex-col items-center">
            <img src={icon2} alt="icon" className="h-10 w-10" />
            <div>
              <p className="dark:text-white font-semibold text-xl">
                Dedicated Account Manager{" "}
              </p>
              <p className="dark:text-light text-sm">Proxy resources</p>
            </div>
          </div>
          <div className="space-y-4 text-center flex flex-col items-center">
            <img src={icon3} alt="icon" className="h-10 w-10" />
            <div>
              <p className="font-semibold text-xl dark:text-white">
                Front runner In inovation
              </p>
              <p className="dark:text-light text-sm">
                More than 10,000 data Professionals
              </p>
            </div>
          </div>
          <div className="space-y-4 text-center flex flex-col items-center">
            <img src={icon4} alt="icon" className="h-10 w-10" />
            <div>
              <p className="font-semibold text-xl dark:text-white">
                24/7 Live Support
              </p>
              <p className="dark:text-light text-sm">Runnig Time</p>
            </div>
          </div>
        </div>
      </div>
      {/* -------------------------------------------------------------------- */}
      <div className="dark:bg-[#18181A] bg-[#F2FFFF]">
        <div className="container py-5">
          <div className="flex flex-col items-center space-y-4">
            <h1 className="font-extrabold text-5xl text-center dark:text-white">
              Kraux Proxie Top Product
            </h1>
            <p className="mb-10 text-sm dark:text-light max-w-2xl text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique
              vulputate mi proin amet, porta massa enim gravida. Cras et,
              elementum senectus cras placerat posuere
            </p>
          </div>
          <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5 gap-8">
            <CardItem
              icon={icon5}
              title="Data Center Proxies"
              desc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tristique vulputate mi proin amet, porta massa enim gravida.
                Cras et, elementum senectus cras placerat posuere. Et,
                pellentesque semper at"
              color="#FFEDB6"
            />
            <CardItem
              icon={icon8}
              title="Residential Proxies"
              desc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tristique vulputate mi proin amet, porta massa enim gravida.
                Cras et, elementum senectus cras placerat posuere. Et,
                pellentesque semper at"
              color="#ABD2BA"
            />
            <CardItem
              icon={icon7}
              title="Next Gen Residential Proxies"
              desc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tristique vulputate mi proin amet, porta massa enim gravida.
                Cras et, elementum senectus cras placerat posuere. Et,
                pellentesque semper at"
              color="#FECBC4"
            />
            <CardItem
              icon={icon5}
              title="Serp Scraper API"
              desc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tristique vulputate mi proin amet, porta massa enim gravida.
                Cras et, elementum senectus cras placerat posuere. Et,
                pellentesque semper at"
              color="#FECBC4"
            />
            <CardItem
              icon={icon6}
              title="E-Commerce Scraper API"
              desc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tristique vulputate mi proin amet, porta massa enim gravida.
                Cras et, elementum senectus cras placerat posuere. Et,
                pellentesque semper at"
              color="#FFEDB6"
            />
            <CardItem
              icon={icon7}
              title="Web Scraper API"
              desc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tristique vulputate mi proin amet, porta massa enim gravida.
                Cras et, elementum senectus cras placerat posuere. Et,
                pellentesque semper at"
              color="#ABD2BA"
            />
          </div>
        </div>
      </div>
      {/* -------------------------------------------------------------------- */}
      <Card
        title="100M+ ethically sourced Residential Proxy pool "
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique vulputate mi proin amet, porta massa enim gravida. Cras et, elementum senectus cras placerat posuere. Et, pellentesque semper at elit, morbi a ultrices viverra. Risus lacinia magna laoreet feugiat quisque commodo pulvinar posuere porttitor. Habitasse interdum in pellentesque in ut sollicitudin."
        illustrate={illustrate2}
        reverse={true}
      />
      <Card
        title="Kraux Proxies self-service dashboard"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique vulputate mi proin amet, porta massa enim gravida. Cras et, elementum senectus cras placerat posuere. Et, pellentesque semper at elit, morbi a ultrices viverra. Risus lacinia magna laoreet feugiat quisque commodo pulvinar posuere porttitor. Habitasse interdum in pellentesque in ut sollicitudin."
        illustrate={illustrate3}
        reverse={false}
      />
      <Card
        title="Gather large-scale data with Scraper APIs"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique vulputate mi proin amet, porta massa enim gravida. Cras et, elementum senectus cras placerat posuere. Et, pellentesque semper at elit, morbi a ultrices viverra. Risus lacinia magna laoreet feugiat quisque commodo pulvinar posuere porttitor. Habitasse interdum in pellentesque in ut sollicitudin."
        illustrate={illustrate4}
        reverse={true}
      />
      {/* -------------------------------------------------------------------- */}
      <div className="dark:bg-[#18181A] bg-[#F2FFFF]">
        <div className="container py-5">
          <div className="flex flex-col items-center space-y-4">
            <h1 className="font-extrabold text-5xl text-center dark:text-white">
              Global Coverage
            </h1>
            <p className="mb-10 text-sm dark:text-light max-w-2xl text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique
              vulputate mi proin amet, porta massa enim gravida. Cras et,
              elementum senectus cras placerat posuere
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-5">
            <div className="flex items-center justify-center">
              <img src={flag1} alt="icon" className="h-28 w-36 rounded" />
              <div className="mb-2">
                <p className="font-semibold text-xl dark:text-white">USA</p>
                <p className="dark:text-light text-sm">2,333,383 IPs</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img src={flag2} alt="icon" className="h-28 w-36 rounded" />
              <div className="mb-2">
                <p className="font-semibold text-xl dark:text-white">India</p>
                <p className="dark:text-light text-sm">2,333,383 IPs</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img src={flag3} alt="icon" className="h-28 w-36 rounded" />
              <div className="mb-2">
                <p className="font-semibold text-xl dark:text-white">Turkey</p>
                <p className="dark:text-light text-sm">2,333,383 IPs</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img src={flag4} alt="icon" className="h-28 w-36 rounded" />
              <div className="mb-2">
                <p className="font-semibold text-xl dark:text-white">Brazil</p>
                <p className="dark:text-light text-sm">2,333,383 IPs</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img src={flag5} alt="icon" className="h-28 w-36 rounded" />
              <div className="mb-2">
                <p className="font-semibold text-xl dark:text-white">UAE</p>
                <p className="dark:text-light text-sm">2,333,383 IPs</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img src={flag6} alt="icon" className="h-28 w-36 rounded" />
              <div className="mb-2">
                <p className="font-semibold text-xl dark:text-white">Ukraine</p>
                <p className="dark:text-light text-sm">2,333,383 IPs</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img src={flag7} alt="icon" className="h-28 w-36 rounded" />
              <div className="mb-2">
                <p className="font-semibold text-xl dark:text-white">UK</p>
                <p className="dark:text-light text-sm">2,333,383 IPs</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img src={flag8} alt="icon" className="h-28 w-36 rounded" />
              <div className="mb-2">
                <p className="font-semibold text-xl dark:text-white">Russia</p>
                <p className="dark:text-light text-sm">2,333,383 IPs</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img src={flag9} alt="icon" className="h-28 w-36 rounded" />
              <div className="mb-2">
                <p className="font-semibold text-xl dark:text-white">Germany</p>
                <p className="dark:text-light text-sm">2,333,383 IPs</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img src={flag10} alt="icon" className="h-28 w-36 rounded" />
              <div className="mb-2">
                <p className="font-semibold text-xl dark:text-white">France</p>
                <p className="dark:text-light text-sm">2,333,383 IPs</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img src={flag11} alt="icon" className="h-28 w-36 rounded" />
              <div className="mb-2">
                <p className="font-semibold text-xl dark:text-white">
                  Indonesia
                </p>
                <p className="dark:text-light text-sm">2,333,383 IPs</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img src={flag12} alt="icon" className="h-28 w-36 rounded" />
              <div className="mb-2">
                <p className="font-semibold text-xl dark:text-white">Vitnam</p>
                <p className="dark:text-light text-sm">2,333,383 IPs</p>
              </div>
            </div>
          </div>
          <button className="btn bg-main py-3 px-10 rounded-lg w-full sm:w-fit flex mx-auto">
            Show All Locations
          </button>
        </div>
      </div>
      {/* -------------------------------------------------------------------- */}
      <div className="container py-5">
        <div className="flex flex-col items-center space-y-4">
          <h1 className="font-extrabold text-5xl text-center dark:text-white">
            Krau Proxies Pricing
          </h1>
          <p className="mb-10 text-sm dark:text-light max-w-2xl text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique
            vulputate mi proin amet, porta massa enim gravida. Cras et,
            elementum senectus cras placerat posuere
          </p>
        </div>
        <div className="border-[1px] border-black dark:border-main w-fit rounded-sm py-1 px-3 flex justify-center mx-auto mt-5 mb-2">
          <button className="btn border-[1px] border-black dark:bg-main py-2 px-4 rounded font-bold">
            Common Plan
          </button>
          <button className="btn btn-sm py-2 px-4 font-bold dark:text-white">
            Major Customer Plan
          </button>
        </div>
        {/* --------------- */}
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center container">
          <div className="bg-[#F2FFFF] rounded-xl py-4 px-3 h-fit m-10 shadow-[0px_1px_5px_2px_rgba(0,0,0,0.2)]">
            <div className="border-b-[1px] w-full mb-4 text-gray-900">
              <h4 className="text-black font-extrabold text-2xl">
                Business Level
              </h4>
            </div>
            <div className="border-b-[1px] text-gray-900 flex mb-4 justify-between items-center">
              <h4 className="text-black font-extrabold text-2xl">60$</h4>
              <p>Plan Include</p>
            </div>
            <div className="border-b-[1px] text-gray-900 flex justify-between items-center">
              <h4 className="text-gray-900 text-2xl">5GB</h4>
              <p>Traffic</p>
            </div>
            <div className="border-b-[1px] text-gray-900 flex justify-between items-center">
              <h4 className="text-gray-900 text-2xl">12GB</h4>
              <p>Traffic</p>
            </div>
            <div className="text-black space-y-5 my-4">
              <p>City/Country Selection</p>
              <p>API Entrance</p>
              <p>Account Secret Call</p>
              <p>HTTP/SOCKS</p>
            </div>
          </div>
          {/* --- */}
          <div className="rounded-xl py-4 px-3 border-[1px] bg-main dark:bg-black dark:border-main m-10 shadow-[0px_1px_5px_2px_rgba(0,0,0,0.2)]">
            <div className="border-b-[1px] w-full mb-4 dark:text-gray-200">
              <h4 className="dark:text-white font-extrabold text-2xl">
                Premium Level
              </h4>
            </div>
            <div className="border-b-[1px] dark:text-gray-200 flex mb-4 justify-between items-center">
              <h4 className="dark:text-white font-extrabold text-2xl">120$</h4>
              <p>Plan Include</p>
            </div>
            <div className="border-b-[1px] dark:text-gray-200 flex justify-between items-center">
              <h4 className="dark:text-gray-200 text-2xl">20GB</h4>
              <p>Traffic</p>
            </div>
            <div className="border-b-[1px] dark:text-gray-200 flex justify-between items-center">
              <h4 className="dark:text-gray-200 text-2xl">12GB</h4>
              <p>Traffic</p>
            </div>
            <div className="dark:text-white space-y-5 my-4">
              <p>City/Country Selection</p>
              <p>API Entrance</p>
              <p>Account Secret Call</p>
              <p>HTTP/SOCKS</p>
              <p>Account Secret Call</p>
              <p>Account Secret Call</p>
            </div>
          </div>
          {/* --- */}
          <div className="bg-[#F2FFFF] rounded-xl py-4 px-3 h-fit m-10 shadow-[0px_1px_5px_2px_rgba(0,0,0,0.2)]">
            <div className="border-b-[1px] w-full mb-4 text-gray-900">
              <h4 className="text-black font-extrabold text-2xl">
                Standart Level
              </h4>
            </div>
            <div className="border-b-[1px] text-gray-900 flex mb-4 justify-between items-center">
              <h4 className="text-black font-extrabold text-2xl">80$</h4>
              <p>Plan Include</p>
            </div>
            <div className="border-b-[1px] text-gray-900 flex justify-between items-center">
              <h4 className="text-gray-900 text-2xl">5GB</h4>
              <p>Traffic</p>
            </div>
            <div className="border-b-[1px] text-gray-900 flex justify-between items-center">
              <h4 className="text-gray-900 text-2xl">12GB</h4>
              <p>Traffic</p>
            </div>
            <div className="text-black space-y-5 my-4">
              <p>City/Country Selection</p>
              <p>API Entrance</p>
              <p>Account Secret Call</p>
              <p>HTTP/SOCKS</p>
            </div>
          </div>
          {/* --- */}
        </div>
        {/* --------------- */}
        <div></div>
      </div>
      {/* -------------------------------------------------------------------- */}
      <div className="dark:bg-[#18181A] bg-[#F2FFFF]">
        <div className="container py-5">
          <div className="flex flex-col items-center space-y-4">
            <h1 className="font-extrabold text-5xl text-center dark:text-white">
              Why You Should Use Krauv Proxies
            </h1>
            <p className="mb-10 text-sm dark:text-light max-w-2xl text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique
              vulputate mi proin amet, porta massa enim gravida. Cras et,
              elementum senectus cras placerat posuere
            </p>
          </div>
          <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5 gap-8">
            <CardItem
              title="The Right Focus"
              desc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tristique vulputate mi proin amet, porta massa enim gravida.
                Cras et, elementum senectus cras placerat posuere. Et,
                pellentesque semper at"
              color="#FFEDB6"
            />
            <CardItem
              title="Reliable Proxy Resources"
              desc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tristique vulputate mi proin amet, porta massa enim gravida.
                Cras et, elementum senectus cras placerat posuere. Et,
                pellentesque semper at"
              color="#ABD2BA"
            />
            <CardItem
              title="Proxy Pool Growth"
              desc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tristique vulputate mi proin amet, porta massa enim gravida.
                Cras et, elementum senectus cras placerat posuere. Et,
                pellentesque semper at"
              color="#FECBC4"
            />
            <CardItem
              title="24/7 Live Support"
              desc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tristique vulputate mi proin amet, porta massa enim gravida.
                Cras et, elementum senectus cras placerat posuere. Et,
                pellentesque semper at"
              color="#FECBC4"
            />
            <CardItem
              title="Know-How Sharing"
              desc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tristique vulputate mi proin amet, porta massa enim gravida.
                Cras et, elementum senectus cras placerat posuere. Et,
                pellentesque semper at"
              color="#FFEDB6"
            />
            <CardItem
              title="The Right Tool For Scraping"
              desc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tristique vulputate mi proin amet, porta massa enim gravida.
                Cras et, elementum senectus cras placerat posuere. Et,
                pellentesque semper at"
              color="#ABD2BA"
            />
          </div>
        </div>
      </div>
      {/* -------------------------------------------------------------------- */}
      <div className="container flex flex-col lg:flex-row items-center gap-5 my-20">
        <div>
          <h1 className="font-extrabold text-3xl dark:text-white">
            How Comapnies Use Our Proxy Service?
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 py-5 gap-8">
          <div className="border-[1px] border-main flex flex-col items-center justify-center rounded space-y-12 w-40 h-48">
            <img src={service1} alt="service" className="" />
            <div className="text-center dark:text-white">
              <p>Ad</p>
              <p>Verification</p>
            </div>
          </div>
          <div className="border-[1px] border-main flex flex-col items-center justify-center rounded space-y-12 w-40 h-48">
            <img src={service2} alt="service" className="" />
            <div className="text-center dark:text-white">
              <p>Ad</p>
              <p>Verification</p>
            </div>
          </div>
          <div className="border-[1px] border-main flex flex-col items-center justify-center rounded space-y-12 w-40 h-48">
            <img src={service3} alt="service" className="" />
            <div className="text-center dark:text-white">
              <p>Ad</p>
              <p>Verification</p>
            </div>
          </div>
          <div className="border-[1px] border-main flex flex-col items-center justify-center rounded space-y-12 w-40 h-48">
            <img src={service4} alt="service" className="" />
            <div className="text-center dark:text-white">
              <p>Ad</p>
              <p>Verification</p>
            </div>
          </div>
          <div className="border-[1px] border-main flex flex-col items-center justify-center rounded space-y-12 w-40 h-48">
            <img src={service5} alt="service" className="" />
            <div className="text-center dark:text-white">
              <p>Ad</p>
              <p>Verification</p>
            </div>
          </div>
          <div className="border-[1px] border-main flex flex-col items-center justify-center rounded space-y-12 w-40 h-48">
            <img src={service6} alt="service" className="" />
            <div className="text-center dark:text-white">
              <p>Ad</p>
              <p>Verification</p>
            </div>
          </div>
          <div className="border-[1px] border-main flex flex-col items-center justify-center rounded space-y-12 w-40 h-48">
            <img src={service7} alt="service" className="" />
            <div className="text-center dark:text-white">
              <p>Ad</p>
              <p>Verification</p>
            </div>
          </div>
          <div className="border-[1px] border-main flex flex-col items-center justify-center rounded space-y-12 w-40 h-48">
            <img src={service8} alt="service" className="" />
            <div className="text-center dark:text-white">
              <p>Ad</p>
              <p>Verification</p>
            </div>
          </div>
        </div>
      </div>
      {/* -------------------------------------------------------------------- */}
      <Footer theme={theme} />
    </div>
  );
};

export default Home;
