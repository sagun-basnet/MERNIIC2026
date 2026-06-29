import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <HeroSection />
        <Slider />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
