import NavbarWithLinks from "../components/NavbarWithLinks";

const AddDiaryNotePage = () => {
  return (
    <div>
      <NavbarWithLinks />

      <main className="w-[80%] mx-auto ">
        <button className="bg-emerald-500 text-emerald-50 inline-block font-semibold text-md px-4 py-2 my-10 rounded-2xl hover:bg-emerald-600 active:bg-emerald-700 shadow cursor-pointer">
          Zapisz notatkę
        </button>
        <input
          type="text"
          className="w-full"
          placeholder="dodaj swoje przemyślenia, napisz jak się czujesz, czego się boisz"
        />
      </main>
    </div>
  );
};

export default AddDiaryNotePage;
