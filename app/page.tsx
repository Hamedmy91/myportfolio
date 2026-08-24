import About from "./Common/About";
import BannerPart from "./Common/BannerPart";
import Contact from "./Common/Contact";
import Footer from "./Common/Footer";
import Graph from "./Common/Graph";
import Job from "./Common/Job";
import Projects from "./Common/Projects";
import Technic from "./Common/Technic";

const page = () => {
  return (
    <div>
      <BannerPart />
      <About />
      <Graph />
      <Technic />
      <Job />
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default page;
