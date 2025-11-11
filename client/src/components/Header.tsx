import brainIcon from "../assets/icons8-brain.png";

const Header = () => {
  return (
    <div className="flex items-center cursor-default">
      <img className="w-10 h-10" src={brainIcon} alt="" />
      <h1 className="font-light text-4xl ml-1">MindHealth</h1>
    </div>
  );
};

export default Header;
