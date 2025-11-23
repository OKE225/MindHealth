import MindfulnessExercisesList from "../components/MindfulnessExercises/MindfulnessExercisesList";
import NavbarWithLinks from "../components/NavbarWithLinks";
import SectionHeaders from "../components/SectionHeaders";

const MindfulnessPage = () => {
  return (
    <div>
      <NavbarWithLinks />

      <main className="w-[70%] mx-auto pb-25">
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
