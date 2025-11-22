import { Link } from "react-router";
import AnimatedBackground from "../components/AnimatedBackground";
import Navbar from "../components/Navbar";
import { mouseClick } from "../utils/mouseClick";
import { FaHeart } from "react-icons/fa";

const LandingPage = () => {
  return (
    <div className="h-screen">
      <AnimatedBackground />
      <Navbar />
      <main className="flex flex-col items-center justify-center relative w-[70%] text-center h-[65%] text-stone-900 mx-auto z-10">
        <h1 className="text-sky-500 text-5xl font-extrabold capitalize w-[60%]">
          Twoje wsparcie dla zdrowia psychicznego każdego dnia
        </h1>
        <Link
          to="/application"
          className="flex items-center bg-sky-500 text-sky-50 hover:bg-sky-600 active:bg-sky-700 text-lg px-4 py-2 my-10 rounded-2xl cursor-pointer shadow"
          onClick={mouseClick}>
          <FaHeart className="mr-2" />
          Przejdź do aplikacji
        </Link>
        <p>wprowadzenie że zdrowie psychiczne jest ważne i warto o nie dbać</p>
        <p>
          krótkie wprowadzenie co to jest mindfulness, terapia
          poznawczo-behawioralna (CBT)
        </p>
      </main>
    </div>
  );
};

export default LandingPage;
