import MindfulnessExercisesList from "../components/MindfulnessExercises/MindfulnessExercisesList";
import NavbarWithLinks from "../components/NavbarWithLinks";
import SectionHeaders from "../components/SectionHeaders";

const MindfulnessPage = () => {
  return (
    <div>
      <NavbarWithLinks />

      <main className="max-w-325 w-[70%] max-2xl:w-[80%] max-xl:w-[85%] max-lg:w-[90%] max-md:w-[92.5%] mx-auto pb-10">
        <SectionHeaders
          header="Ćwiczenia Mindfulness"
          description="Praktykuj codziennie ćwiczenia mindfulness, aby zmniejszyć stres i
        poprawić jasność umysłu"
        />

        <MindfulnessExercisesList />
      </main>
    </div>
  );
};

export default MindfulnessPage;
