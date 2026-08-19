import About from "./Common/About";
import BannerPart from "./Common/BannerPart";
import Graph from "./Common/Graph";
import Technic from "./Common/Technic";

const page = () => {
  return (
    <div>
      <BannerPart />
      <About />
      <Graph />
      <Technic />
    </div>
  );
};

export default page;
