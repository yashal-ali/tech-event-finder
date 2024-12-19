import HeroPage from "@/components/HeroPage";

const HomePage = () => {
  return (
    <div className="sm:p-6 p-2 mt-28 grid place-items-center items-center w-full justify-center">
      <h1 className="sm:text-[65px] text-[40px] font-bold  text-headingColor font-sans">
        Tech Events Finder
      </h1>
      <h3 className="max-w-[800px] w-full text-center my-2 px-4 text-textColor">
        Welcome to TechEvents Finder, your go-to platform for discovering,
        managing, and creating local tech events in your city. Whether you're a
        tech enthusiast, a professional looking to network, or an organizer
        planning your next big event, TechEvents Finder is here to make it easy
        and fun.
      </h3>
      <HeroPage />
    </div>
  );
};

export default HomePage;
