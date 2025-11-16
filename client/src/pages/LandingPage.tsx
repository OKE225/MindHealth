import { Link } from "react-router";
import AnimatedBackground from "../components/AnimatedBackground";
import Header from "../components/Header";

const LandingPage = () => {
  return (
    <>
      <AnimatedBackground />
      <div>
        <Header />
        <p>Twoje wsparcie dla zdrowia psychicznego każdego dnia</p>
        <Link
          to="/application"
          className="inline-block bg-blue-500 text-blue-50 hover:bg-blue-600 active:bg-blue-700 p-2 rounded-2xl cursor-pointer">
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
