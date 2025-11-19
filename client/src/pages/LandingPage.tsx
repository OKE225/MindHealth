import { Link } from "react-router";
import AnimatedBackground from "../components/AnimatedBackground";
import Navbar from "../components/Navbar";

const LandingPage = () => {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main className="relative w-[80%] text-center mx-auto z-10">
        <p>Twoje wsparcie dla zdrowia psychicznego każdego dnia</p>
        <Link
          to="/application"
          className="inline-block bg-sky-500 text-sky-50 hover:bg-sky-600 active:bg-sky-700 px-4 py-2 rounded-2xl cursor-pointer shadow">
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
