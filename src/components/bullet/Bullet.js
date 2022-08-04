import { useNavigate } from "react-router-dom";

const Bullet = ({ title, bool, theme, path }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  return (
    <div className="relative cursor-pointer" onClick={handleClick}>
      <p className="whitespace-nowrap">{title}</p>
      {bool && (
        <div
          className={`w-2 h-2 ${
            theme ? "dark:bg-white" : "bg-black"
          } rounded-full absolute top-2 -left-[20.5px]`}
        />
      )}
    </div>
  );
};

export default Bullet;
