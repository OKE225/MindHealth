import { Link } from "react-router";
import AnimatedBackground from "../components/AnimatedBackground";
import Navbar from "../components/Navbar";
import { mouseClick } from "../utils/mouseClick";

const LandingPage = () => {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main className="flex flex-col items-center justify-center relative w-[70%] text-center text-stone-900 mx-auto mt-[10%] z-10">
        <h1 className="text-4xl font-bold capitalize w-[50%]">
          Twoje wsparcie dla zdrowia psychicznego każdego dnia
        </h1>
        <Link
          to="/application"
          className="inline-block bg-sky-500 text-sky-50 hover:bg-sky-600 active:bg-sky-700 px-4 py-2 mt-10 rounded-2xl cursor-pointer shadow"
          onClick={mouseClick}>
          Przejdź do aplikacji
        </Link>
        <p>wprowadzenie że zdrowie psychiczne jest ważne i warto o nie dbać</p>
        <p>
          krótkie wprowadzenie co to jest mindfulness, terapia
          poznawczo-behawioralna (CBT)
        </p>
      </main>
    </>
  );
};

export default LandingPage;
