import MindfulnessExercisesList from "../components/MindfulnessExercisesList";
import NavbarWithLinks from "../components/NavbarWithLinks";
import SectionHeaders from "../components/SectionHeaders";

const MindfulnessPage = () => {
  return (
    <div>
      <NavbarWithLinks />

      <main className="w-[70%] mx-auto">
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
