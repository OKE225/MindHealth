import { Link } from "react-router";
import AnimatedBackground from "../components/AnimatedBackground";
import Navbar from "../components/Navbar";

const LandingPage = () => {
  return (
    <>
      <AnimatedBackground />
      <div>
        <Navbar />
        <p>Twoje wsparcie dla zdrowia psychicznego każdego dnia</p>
        <Link
          to="/application"
          className="inline-block bg-sky-500 text-white p-2 rounded-lg cursor-pointer">
          Przejdź do aplikacji
        </Link>
        <p>wprowadzenie że zdrowie psychiczne jest ważne i warto o nie dbać</p>
        <p>
          krótkie wprowadzenie co to jest mindfulness, terapia
          poznawczo-behawioralna (CBT)
        </p>
      </div>
    </>
  );
};

export default LandingPage;
