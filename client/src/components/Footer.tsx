import Header from "./Header";

const Footer = () => {
  return (
    <div className="bg-blue-800 absolute w-full bottom-0 overflow-hidden">
      <Header />

      <p>
        Jeśli widzisz, że masz problemy ze zdrowiem psychicznym lub zauważysz
        takie problemy u bliskich, nie bój się iść po pomoc do specjalisty - to
        ważny krok na drodze do poprawy samopoczucia. Każdy krok w stronę
        lepszego samopoczucia to dbanie o siebie i wyraz troski o swoje zdrowie.
        Pamiętaj, że szukanie pomocy jest oznaką siły, a nie słabości, i możesz
        liczyć na wsparcie od specjalistów i lekarzy na każdym etapie tej drogi.
      </p>
    </div>
  );
};

export default Footer;
