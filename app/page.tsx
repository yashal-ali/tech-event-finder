
import HeroPage from '@/components/heroPage';

const HomePage = () => {
  

  return (
    <div className="p-6 mt-32 grid place-items-center items-center w-full justify-center">
      <h1 className="text-[65px] font-bold mb-4 text-headingColor font-sans">Tech Events Finder</h1>
      <p className="max-w-[800px] w-full text-center my-4 text-textColor">
        Welcome to TechEvents Finder, your go-to platform for discovering, managing, and creating local tech events in your city. Whether you're a tech enthusiast, a professional looking to network, or an organizer planning your next big event, TechEvents Finder is here to make it easy and fun.
      </p>
      <HeroPage/>
    </div>
  );
};

export default HomePage;
