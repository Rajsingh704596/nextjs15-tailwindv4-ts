import { Grid } from "./BentoCard-Grid";
import DarkModePage from "./Card";
import { Navbar } from "./Navbar";

const page = () => {
  return (
    <>
      <div className="relative h-screen">
        <Navbar />
        <DarkModePage />
      </div>
      <div className="relative">
        <Grid />
      </div>
    </>
  );
};

export default page;
