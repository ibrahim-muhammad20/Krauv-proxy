import React from "react";

const Card = ({ illustrate, desc, title, reverse }) => {
  return (
    <div
      className={`container flex ${
        !reverse ? "flex-col-reverse" : "flex-col"
      } md:grid md:grid-cols-2 items-center my-5`}
    >
      {reverse && (
        <div>
          <img src={illustrate} alt="Illustration 1" />
        </div>
      )}
      <div className="space-y-4 flex flex-col my-5 dark:text-white">
        <h1 className="font-extrabold text-5xl">{title}</h1>
        <p className="mb-10">{desc}</p>
        <div className="flex gap-6 flex-col sm:flex-row pt-10">
          <button className="btn bg-main py-3 px-10 rounded-lg w-full sm:w-fit">
            Read more
          </button>
        </div>
      </div>
      {!reverse && (
        <div>
          <img src={illustrate} alt="Illustration 1" />
        </div>
      )}
    </div>
  );
};

export default Card;
