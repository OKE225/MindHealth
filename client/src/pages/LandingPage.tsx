import { Link } from "react-router";
import AnimatedBackground from "../components/AnimatedBackground";
import Navbar from "../components/Navbar";
import { mouseClick } from "../utils/mouseClick";
import { FaBrain } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div className="h-screen overflow-hidden">
      <AnimatedBackground />
      <Navbar />
      <main className="flex flex-col items-center justify-center relative w-[70%] text-center h-full text-stone-900 mx-auto z-10">
        <h1 className="text-stone-900 text-5xl font-extrabold uppercase w-[60%]">
          Twoje wsparcie dla zdrowia psychicznego każdego dnia
        </h1>
        <Link
          to="/application"
          className="flex items-center bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700 text-lg px-4 py-2 my-15 rounded-2xl cursor-pointer shadow"
          onClick={mouseClick}>
          <FaBrain className="mr-2" />
          Przejdź do aplikacji
        </Link>
        <div className="flex gap-15 mt-20 text-left">
          <div className="bg-white/90 rounded-2xl shadow p-5">
            <h3 className="text-stone-900 text-2xl font-bold capitalize mb-1">
              Zdrowie psychiczne
            </h3>
            <p className="text-stone-600">
              Zdrowie psychiczne jest niezwykle ważne, ponieważ wpływa na nasze
              emocje, myśli i relacje z innymi ludźmi. Dbanie o nie pozwala
              lepiej radzić sobie ze stresem, utrzymywać równowagę emocjonalną
              oraz cieszyć się satysfakcjonującym życiem. Zdrowie psychiczne to
              fundament ogólnego dobrostanu, dlatego warto go pielęgnować
              świadomie i regularnie.
            </p>
          </div>
          <div className="bg-white/90 rounded-2xl shadow p-5">
            <h3 className="text-stone-900 text-2xl font-bold capitalize mb-1">
              Aktywność fizyczna
            </h3>
            <p className="text-stone-600">
              Aktywność fizyczna pobudza organizm do wydzielania endorfin,
              hormonów szczęścia, które poprawiają nastrój i zmniejszają stres
              oraz lęk. Regularne ćwiczenia wspierają także koncentrację, jakość
              snu i wzmacniają odporność psychiczną. Dzięki temu systematyczny
              ruch pomaga zapobiegać depresji i poprawia samopoczucie.
            </p>
          </div>
          <div className="bg-white/90 rounded-2xl shadow p-5">
            <h3 className="text-stone-900 text-2xl font-bold capitalize mb-1">
              Pokonywanie stresu
            </h3>
            <p className="text-stone-600">
              Jak radzić sobie ze stresem w codziennym życiu? Warto stosować
              techniki relaksacyjne, planować czas na odpoczynek i praktykować
              uważność, co pomaga świadomie reagować na emocje. Pomocne są też
              regularne ćwiczenia, zdrowa dieta i odpowiednia ilość snu, które
              łagodzą skutki stresu. Ważne jest także szukanie wsparcia u
              bliskich lub specjalistów.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
