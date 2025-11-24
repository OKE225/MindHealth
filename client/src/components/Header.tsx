import brainIcon from "../assets/icons8-brain.png";

const Header = () => {
  return (
    <div className="flex items-center cursor-default max-sm:ml-2">
      <img className="w-10 max-sm:w-8" src={brainIcon} alt="" />
      <h1 className="text-stone-900 font-light text-4xl max-sm:text-3xl ml-2 max-sm:ml-1">
        MindHealth
      </h1>
    </div>
  );
};

export default Header;
