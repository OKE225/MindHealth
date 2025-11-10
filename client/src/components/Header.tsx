import brainIcon from "../assets/icons8-brain.png";

const Header = () => {
  return (
    <div className="flex items-center">
      <img className="w-10 h-10" src={brainIcon} alt="" />
      <h1 className="text-blue-500 font-semibold text-5xl ml-1">MindHealth</h1>
    </div>
  );
};

export default Header;
