import MindfulnessExercisesList from "../components/MindfulnessExercisesList";
import MindfulnessOpening from "../components/MindfulnessOpening";
import NavbarWithLinks from "../components/NavbarWithLinks";

const MindfulnessPage = () => {
  return (
    <div>
      <NavbarWithLinks />

      <main className="w-[80%] mx-auto">
        <MindfulnessOpening />

        <MindfulnessExercisesList />
      </main>
    </div>
  );
};

export default MindfulnessPage;
