import { useEffect, useState } from "react";

const mentalHealthTips = [
  "Dbaj o regularny sen i odpoczynek.",
  "Znajduj czas na relaks i hobby.",
  "Rozmawiaj o swoich uczuciach z bliskimi.",
  "Ćwicz uważność i medytację.",
  "Unikaj nadmiernego stresu, ucz się technik relaksacyjnych.",
  "Ustalaj realistyczne cele i priorytety.",
  "Pij dużo wody i dbaj o zdrową dietę.",
  "Ćwicz regularnie, nawet krótki spacer pomaga.",
  "Zadbaj o równowagę między pracą a życiem prywatnym.",
  "Unikaj używek takich jak nadmiar alkoholu czy narkotyki.",
  "Proś o pomoc, gdy czujesz się przytłoczony.",
  "Praktykuj wdzięczność i pozytywne myślenie.",
  "Utrzymuj kontakty społeczne i angażuj się w życie społeczne.",
  "Zapisuj swoje uczucia, prowadź dziennik emocji.",
  "Ucz się technik radzenia sobie z lękiem.",
  "Zadbaj o swoje otoczenie, porządek w miejscu zamieszkania wpływa na umysł.",
  "Ustal rutynę dnia, która pomaga się zorganizować.",
  "Unikaj przeciążenia medialnego i informacyjnego.",
  "Ogranicz korzystanie z mediów społecznościowych.",
  "Rozwijaj umiejętności komunikacyjne.",
  "Ucz się odpoczywać bez poczucia winy.",
  "Znajduj czas na śmiech i zabawę.",
  "Pracuj nad budowaniem swojej pewności siebie.",
  "Pracuj nad akceptacją siebie i swoich niedoskonałości.",
  "Unikaj perfekcjonizmu – ucz się być dla siebie wyrozumiałym.",
  "Stawiaj granice w relacjach z innymi.",
  "Rozpoznawaj i nazywaj swoje emocje.",
  "Ucz się asertywności.",
  "Zadbaj o regularne badania i opiekę zdrowotną.",
  "Nie bój się zmienić źle działających nawyków.",
  "Poszukuj wsparcia u specjalistów, jeśli potrzebujesz pomocy.",
  "Angażuj się w działania na rzecz innych – pomaganie wspiera psychikę.",
  "Ucz się nowych rzeczy, rozwijaj pasje.",
  "Znajduj chwile na samotność, aby się wyciszyć.",
  "Przyjmuj swoje emocje – nie tłum ich.",
  "Używaj technik oddechowych w stresujących momentach.",
  "Dbaj o zdrowie fizyczne – to wpływa na psychikę.",
  "Ustal zdrowe nawyki żywieniowe.",
  "Zadbaj o sens i cel w swoim życiu.",
  "Planuj i realizuj małe kroki do zmiany.",
  "Ucz się odpuszczać to, czego nie możesz zmienić.",
  "Kształtuj optymistyczne spojrzenie na życie.",
  "Poszukuj inspiracji i motywacji.",
  "Ustal priorytety i skupiaj się na tym, co ważne.",
  "Dbaj o higienę cyfrową i odpoczynek od ekranu.",
  "Pracuj nad samoświadomością i autorefleksją.",
  "Znajduj czas na naturę i kontakt ze środowiskiem.",
  "Ogranicz przebywanie w toksycznych relacjach.",
  "Bądź cierpliwy wobec siebie i procesu rozwoju.",
  "Systematycznie praktykuj techniki relaksacyjne.",
  "Zadbaj o poczucie bezpieczeństwa emocjonalnego.",
  "Używaj afirmacji wzmacniających poczucie wartości.",
  "Rozwijaj umiejętności rozwiązywania problemów.",
  "Praktykuj empatię wobec siebie i innych.",
  "Dbaj o równowagę między obowiązkami i przyjemnościami.",
  "Unikaj nadmiernego obciążenia obowiązkami.",
  "Obserwuj swoje myśli i wyłapuj negatywne wzorce.",
  "Pielęgnuj miłość i szacunek do samego siebie.",
  "Ucz się skutecznego radzenia sobie z porażkami.",
  "Ustalaj codzienne rytuały sprzyjające lepszemu samopoczuciu.",
  "Pamiętaj o regularnym kontakcie z lekarzem i terapeutą.",
  "Ogranicz oglądanie negatywnych wiadomości.",
  "Praktykuj wdzięczność za drobne rzeczy.",
  "Utrzymuj zdrowe nawyki snu.",
  "Ucz się rozpoznawać sygnały wypalenia.",
  "Twórz przestrzeń na pozytywne doświadczenia.",
  "Dbaj o dobre relacje z rodziną i przyjaciółmi.",
  "Stosuj techniki uważności w codziennym życiu.",
  "Uiszczaj regularnie aktywności fizyczne dla dobra umysłu.",
  "Zmieniaj negatywne myśli na konstruktywne.",
  "Dbaj o systematyczność i konsekwencję w działaniach.",
  "Znajduj czas na kreatywność i twórczość.",
  "Ucz się i stosuj techniki mindfulness i medytacji.",
  "Nie bój się szukać wsparcia w kryzysowych momentach.",
  "Dziel się swoimi uczuciami i nie ukrywaj problemów.",
  "Praktykuj oddech przeponowy dla redukcji napięcia.",
  "Zadbaj o swój czas wolny i odpoczynek.",
  "Ogranicz porównywanie się z innymi.",
  "Zadbaj o zdrowe granice emocjonalne.",
  "Przyjmuj komplementy i naucz się je dawać.",
  "Pielęgnuj swoje zainteresowania i pasje.",
  "Ucz się rozpoznawać i unikać toksycznych ludzi.",
  "Znajduj powody do codziennego uśmiechu.",
  "Dbaj o równowagę między życiem zawodowym a prywatnym.",
  "Wyznaczaj cele, które dają ci radość i sens.",
  "Dbaj o obecność i bycie tu i teraz.",
  "Ucz się, jak zdrowo wyrażać swoje potrzeby.",
  "Twórz pozytywne nawyki, które wspierają psychikę.",
  "Nie obwiniaj się za rzeczy poza swoją kontrolą.",
  "Podejmuj świadome decyzje dotyczące swojego życia.",
  "Zadbaj o rozwój osobisty i duchowy.",
  "Unikaj przeciążenia informacyjnego.",
  "Znajduj czas na relaksujące kąpiele lub masaże.",
  "Dbaj o swoje emocjonalne i fizyczne granice.",
  "Zawsze słuchaj swojego ciała i sygnałów umysłu.",
  "Przyjmuj zmiany jako naturalną część życia.",
  "Pamiętaj, że proszenie o pomoc to siła, nie słabość.",
  "Praktykuj codzienne rytuały, które wyciszają umysł.",
  "Dbaj o pozytywne myślenie i nadzieję.",
  "Ucz się odpuszczać negatywne myśli i emocje.",
  "Znajduj czas na uważne jedzenie i picie.",
  "Zadbaj o prawidłową postawę ciała i ruch.",
  "Ciesz się z małych sukcesów każdego dnia.",
  "Ucz się, jak radzić sobie z krytyką konstruktywnie.",
  "Pielęgnuj poczucie humoru i dystans do siebie.",
];

const AdvicesSection = () => {
  const [currentTip, setCurrentTip] = useState<string>("");
  const [fade, setFade] = useState<boolean>(true);

  const getRandomTip = () => {
    const randomIndex = Math.floor(Math.random() * mentalHealthTips.length);
    const randomTip = mentalHealthTips[randomIndex];

    setCurrentTip(randomTip);
  };

  useEffect(() => {
    setFade(false);

    const timeout = setTimeout(() => {
      getRandomTip();
      setFade(true);
    }, 300);

    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        getRandomTip();
        setFade(true);
      }, 300);
    }, 5000);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="bg-white mb-5 p-5 max-md:p-3 rounded-2xl shadow">
      <h2 className="text-stone-900 text-2xl font-bold">
        Porady zdrowia psychicznego
      </h2>

      <div className="bg-blue-500 text-white mt-5 max-md:mt-3 duration-500 rounded-2xl shadow">
        <p
          className={`p-5 max-md:p-3 mt-5 max-md:mt-3 transition-opacity text-xl max-lg:text-lg max-lg:p-4 font-semibold duration-500 rounded-2xl shadow ${
            fade ? "opacity-100" : "opacity-0"
          }`}>
          {currentTip}
        </p>
      </div>
    </div>
  );
};

export default AdvicesSection;
