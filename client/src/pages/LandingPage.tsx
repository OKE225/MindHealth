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
      <main className="flex flex-col items-center justify-center relative max-w-325 w-[70%] max-2xl:w-[80%] max-xl:w-[85%] max-lg:w-[90%] max-md:w-[92.5%] max-sm:w-full text-center h-250 max-xl:h-[80%] text-stone-900 mx-auto z-10">
        <h1 className="text-stone-900 text-5xl max-sm:text-4xl font-extrabold uppercase w-[60%] max-2xl:w-[80%] max-sm:w-[95%]">
          Twoje wsparcie dla zdrowia psychicznego każdego dnia
        </h1>
        <Link
          to="/application"
          className="flex items-center bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700 transition-colors duration-50 ease-in-out text-lg px-4 py-2 my-15 rounded-2xl cursor-pointer shadow"
          onClick={mouseClick}>
          <FaBrain className="mr-2" />
          Przejdź do aplikacji
        </Link>
        <div className="flex gap-5 mt-10 text-left max-xl:hidden">
          <div className="bg-white rounded-2xl shadow p-5">
            <h3 className="text-stone-900 text-2xl max-2xl:text-xl font-bold capitalize mb-1">
              Zdrowie psychiczne
            </h3>
            <p className="text-stone-600 leading-tight max-2xl:text-sm">
              Zdrowie psychiczne jest niezwykle ważne, ponieważ wpływa na nasze
              emocje, myśli i relacje z innymi ludźmi. Dbanie o nie pozwala
              lepiej radzić sobie ze stresem, utrzymywać równowagę emocjonalną
              oraz cieszyć się satysfakcjonującym życiem. Zdrowie psychiczne to
              fundament ogólnego dobrostanu, dlatego warto go pielęgnować
              świadomie i regularnie.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow p-5">
            <h3 className="text-stone-900 text-2xl max-2xl:text-xl font-bold capitalize mb-1">
              Aktywność fizyczna
            </h3>
            <p className="text-stone-600 leading-tight max-2xl:text-sm">
              Aktywność fizyczna pobudza organizm do wydzielania endorfin,
              hormonów szczęścia, które poprawiają nastrój i zmniejszają stres
              oraz lęk. Regularne ćwiczenia wspierają także koncentrację, jakość
              snu i wzmacniają odporność psychiczną. Dzięki temu systematyczny
              ruch pomaga zapobiegać depresji i poprawia samopoczucie.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow p-5">
            <h3 className="text-stone-900 text-2xl max-2xl:text-xl font-bold capitalize mb-1">
              Pokonywanie stresu
            </h3>
            <p className="text-stone-600 leading-tight max-2xl:text-sm">
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
